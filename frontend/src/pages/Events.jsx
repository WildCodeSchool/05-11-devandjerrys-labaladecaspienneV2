import Header from "../components/Header"
import Footer from "../components/Footer"
import CardEvent from "../components/CardEvent"
import deco from "../assets/Images/deco.png"
import deco1 from "../assets/Images/deco1.png"
import Burger from "@components/Burger"
import LineTop from "../assets/Images/head_line.png"

import { useState, useEffect } from "react"
import axios from "axios"

export default function Events() {
  // Connexion BDD
  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/events").then((response) => {
      setEvents(response.data)
    })
  }, [])

  // Animation affichage
  const [show, setShow] = useState(false)
  const [childShow, setChildShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
    if (!show) {
      // If the parent was just displayed, set the child opacity to 1 after a delay
      setTimeout(() => {
        setChildShow(true)
      }, 100)
    } else {
      // If the parent was just hidden, set the child opacity to 0 immediately
      setChildShow(false)
    }
  }

  const parentStyles = {
    display: show ? "block" : "none",
  }

  const childStyles = {
    opacity: childShow ? 1 : 0,
    transition: "opacity 0.8s ease-in-out",
  }

  // Filtrer les événements passés
  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date_event_begginning)
    const currentYear = new Date().getFullYear()
    return (
      eventDate.getFullYear() < currentYear ||
      (eventDate.getFullYear() === currentYear && eventDate < new Date())
    )
  })

  // Obtenir la liste des années d'événements passés
  let pastEventYears = [
    ...new Set(
      pastEvents.map((event) =>
        new Date(event.date_event_begginning).getFullYear()
      )
    ),
  ]

  // // Vérifier si l'année en cours doit être ajoutée dans la liste des années passées
  // const currentYear = new Date().getFullYear()
  // const lastPastEventYear = pastEventYears[pastEventYears.length - 1]
  // if (currentYear > lastPastEventYear) {
  //   pastEventYears.push(currentYear)
  // }

  // Trier les années de manière décroissante
  pastEventYears = pastEventYears.sort((a, b) => b - a)

  // Composant pour afficher les événements passés pour une année donnée
  const EventsByYear = ({ year, events }) => (
    <div className="eventsHistory show">
      <h3 className="eventTitle">{year}</h3>
      {events.map((event) => (
        <CardEvent
          key={event.id}
          picture_event={event.picture_event}
          name_event={event.name_event}
          description_event={event.description_event}
          date_event_begginning={event.date_event_begginning}
          date_event_end={event.date_event_end}
          place_event={event.place_event}
          link_event={event.link_event}
        />
      ))}
    </div>
  )

  const [selectedYear, setSelectedYear] = useState(null)

  return (
    <div>
      <Header />
      <div className="eventsBody">
        <h1 className="headTitle">LA BALADE CASPIENNE</h1>
        <img
          id="lDesign1"
          className="ligneDesign"
          alt="ligne de séparation"
          src={deco}
        ></img>
        <img
          id="lDesign2"
          className="ligneDesign"
          alt="ligne de séparation"
          src={deco1}
        ></img>
        <h2 className="eventTitle">Evènements à venir</h2>
        <img
          id="lDesign3"
          className="ligneDesign"
          alt="ligne de séparation"
          src={deco1}
        ></img>
        <div id="introEvent">
          Pour faire la lumière sur les prochains évènements ou conventions où
          vous pouvez me retrouver, cliquez sur la bougie...
        </div>
        {/* {show && ( */}
        <div style={parentStyles}>
          <div
            className={`card-event ${show ? "show" : ""}`}
            // style={{
            //   opacity: show ? 1 : 0,
            //   transition: "opacity 0.5s ease-in-out",
            // }}
            style={childStyles}
          >
            {events.map((event) => {
              const eventDate = new Date(event.date_event_begginning)
              if (eventDate >= new Date()) {
                return (
                  <CardEvent
                    key={event.id}
                    picture_event={event.picture_event}
                    name_event={event.name_event}
                    description_event={event.description_event}
                    date_event_begginning={event.date_event_begginning}
                    date_event_end={event.date_event_end}
                    place_event={event.place_event}
                    link_event={event.link_event}
                  />
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
        {/* )} */}
        {/* {show && ( */}
        <div style={parentStyles}>
          <div
            className={`card-event ${show ? "show" : ""}`}
            style={childStyles}
          >
            <h3 className="eventTitle">Evènements passés</h3>
            <img
              className="lineTitleEvent"
              src={LineTop}
              alt="ligne de séparation"
            />

            {/* Pagination pour les événements passés */}
            <div className="pagination">
              {pastEventYears.map((year) => (
                <button
                  key={year}
                  className="listPast"
                  onClick={() =>
                    setSelectedYear(year === selectedYear ? null : year)
                  }
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Affichage des événements passés pour chaque année */}
            {pastEventYears.map((year) => {
              const eventsByYear = pastEvents.filter(
                (event) =>
                  new Date(event.date_event_begginning).getFullYear() === year
              )
              return (
                selectedYear === year && (
                  <EventsByYear key={year} year={year} events={eventsByYear} />
                )
              )
            })}

            {/* Pagination cliquable pour les événements passés */}
            {/* <div className="pagination">
              {Array.from({ length: pageCount }, (_, i) => (
                <button key={i + 1} onClick={() => setPage(i + 1)}>
                  {pastEventYears[i]}
                </button>
              ))}
            </div> */}

            {/* Affichage des événements passés pour la page en cours */}
            {/* {displayedEvents.map((event) => (
              <CardEvent
                key={event.id}
                picture_event={event.picture_event}
                name_event={event.name_event}
                description_event={event.description_event}
                date_event_begginning={event.date_event_begginning}
                place_event={event.place_event}
                link_event={event.link_event}
              />
            ))} */}
          </div>
        </div>
        {/* )} */}
      </div>
      {/* Bougies-bouton pour afficher/masquer les éléments */}
      <div className="holder">
        <div className="candle" onClick={handleShow}>
          {show && <div className="blinking-glow" style={childStyles}></div>}
          <div className="thread"></div>
          {show && <div className="glow" style={childStyles}></div>}
          {show && <div className="flame" style={childStyles}></div>}
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
