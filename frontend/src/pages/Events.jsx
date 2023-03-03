import Header from "../components/Header"
import Footer from "../components/Footer"
import deco from "../assets/Images/deco.png"
import deco1 from "../assets/Images/deco1.png"
import Burger from "@components/Burger"
import LineTop from "../assets/Images/head_line.png"

import { useState, useEffect } from "react"
import axios from "axios"
// import { Link } from "react-router-dom"
import CardEvent from "../components/CardEvent"

export default function Events() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/events").then((response) => {
      setEvents(response.data)
    })
  }, [])

  const [show, setShow] = useState(true)
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
        {show && (
          <div className="card-event show">
            <div className="event-container">
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
            </div>
            {events.map((event) => (
              <CardEvent
                key={event.id}
                picture_event={event.picture_event}
                name_event={event.name_event}
                date_event={event.date_event}
              />
            ))}
          </div>
        )}
        {show && (
          <div className="eventsHistory show">
            <h3 className="eventTitle">Evènements passés</h3>
            <img
              className="lineTitleEvent"
              src={LineTop}
              alt="ligne de séparation"
            />
            <ul className="listPast" role={"tablist"}>
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
            </ul>
          </div>
        )}
      </div>
      <div className="holder">
        <div className="candle" onClick={() => setShow(!show)}>
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
