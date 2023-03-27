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
  const handleShow = () => {
    // setTimeout(() => {
    setShow(!show)
    // }, 100)
  }

  // Etats pour la pagination
  // const [page, setPage] = useState(1) // Pagination en cours

  // Filtrer les événements passés
  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date_event_begginning)
    return eventDate.getFullYear() < new Date().getFullYear()
  })

  // Obtenir la liste des années d'événements passés
  const pastEventYears = [
    ...new Set(
      pastEvents.map((event) =>
        new Date(event.date_event_begginning).getFullYear()
      )
    ),
  ]

  // Calculer le nombre de pages
  // const pageCount = Math.ceil(pastEvents.length / 10)

  // Obtenir les événements à afficher pour la page en cours
  // const displayedEvents = pastEvents.slice((page - 1) * 10, page * 10)

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
          place_event={event.place_event}
          link_event={event.link_event}
        />
      ))}
    </div>
  )

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
        <div
          className={`card-event ${show ? "show" : ""}`}
          style={{
            opacity: show ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {/* <div className="event-container">
              <div className="event">
                <div className="event-left">
                  <div className="event-date">
                    <div className="date">25</div>
                    <div className="month">Dec 2023</div>
                  </div>
                </div>
                <div className="event-right">
                  <h3 className="event-title">
                    OctoGônes 2023 - 13ème Convention du Jeu et de l'Imaginaire
                  </h3>
                  <div className="event-description">
                    42 rue de maître Gurdil à partir de 11H stand 42 - prix
                    d'entrée : 42 €
                  </div>
                  <div className="infos-contain">
                    <div className="event-infos">Arras (62)</div>
                    <div className="event-infos">site internet</div>
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="event-left">
                  <div className="event-date">
                    <div className="date">8</div>
                    <div className="month">Nov 2023</div>
                  </div>
                </div>
                <div className="event-right">
                  <h3 className="event-title">
                    Le salon fantastique 10ème édition
                  </h3>
                  <div className="event-description">
                    A l'auberge du poney qui tousse à partir de 10H stand 42 -
                    prix d'entrée : 42 €
                  </div>
                  <div className="infos-contain">
                    <div className="event-infos">Dunkerque (59)</div>
                    <div className="event-infos">site internet</div>
                  </div>
                </div>
              </div>
            </div> */}
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
                  place_event={event.place_event}
                  link_event={event.link_event}
                />
              )
            } else {
              return null
            }
          })}
        </div>
        {/* )} */}
        {/* {show && ( */}
        <div className={`card-event ${show ? "show" : ""}`}>
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
                onClick={() => setShow(year === show ? false : year)}
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
              show === year && (
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

          {/* <ul className="listPast" role={"tablist"}>
              <li>
                <a
                  href="#tab_2023"
                  role="tab"
                  aria-selected="false"
                  aria-controls="tab_2023"
                  style={{ textDecoration: "none" }}
                  // tabindex="-1"
                >
                  <span>2023</span>
                </a>
              </li>
              <li>
                <a
                  href="#tab_2022"
                  role="tab"
                  aria-selected="false"
                  aria-controls="tab_2022"
                  style={{ textDecoration: "none" }}
                  // tabindex="-1"
                >
                  <span>2022</span>
                </a>
              </li>
            </ul> */}
        </div>
        {/* )} */}
      </div>
      {/* Bougies-bouton pour afficher/masquer les éléments */}
      <div className="holder">
        <div className="candle" onClick={handleShow}>
          {show && <div className="blinking-glow"></div>}
          <div className="thread"></div>
          {show && <div className="glow"></div>}
          {show && <div className="flame"></div>}
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
