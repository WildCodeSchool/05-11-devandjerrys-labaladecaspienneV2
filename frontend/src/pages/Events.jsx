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

export default function Home() {
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
        <img id="image1" className="image" src={deco}></img>
        <img id="image2" className="image" src={deco1}></img>
        <h2 className="eventTitle">Evènements à venir</h2>
        <img id="image3" className="image" src={deco1}></img>
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
          <img className="lineTitleEshop" src={LineTop} alt="image" />
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
