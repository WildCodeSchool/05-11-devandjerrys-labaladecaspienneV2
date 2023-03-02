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
  return (
    <div>
      <Header />
      <div className="EventsBody">
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
        <div className="card-event">
          {events.map((event) => (
            <CardEvent
              key={event.id}
              picture_theme={event.picture_event}
              name_theme={event.name_event}
            />
          ))}
        </div>
        <div className="eventsHistory">
          <h3 className="eventTitle">Evènements passés</h3>
          <img
            className="lineTitleEvent"
            src={LineTop}
            alt="ligne de séparation"
          />
        </div>
      </div>
      <div className="holder">
        <div className="candle">
          <div className="blinking-glow"></div>
          <div className="thread"></div>
          <div className="glow"></div>
          <div className="flame"></div>
        </div>
      </div>

      <Burger />
      <Footer />
    </div>
  )
}
