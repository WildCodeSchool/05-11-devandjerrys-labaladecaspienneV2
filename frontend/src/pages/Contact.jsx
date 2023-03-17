import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LineTop from "../assets/Images/head_line.png"
import Separateur from "../assets/Images/separateur.png"
import { set } from "husky"

function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  function Submit() {
    alert(
      `Bonjour ${firstName} ${lastName} merci pour votre message,nous vous repondons au plus vite`
    )
  }
  return (
    <div>
      <Header />
      <div className="contact">
        <p className="titleHeadContact">Contact</p>
        <img className="lineTitleContact" src={LineTop} alt="image" />
        <form action={Submit}>
          <div className="inputBox">
            {/* <label htmlFor="FirstName" className="form-label"></label> */}
            <input
              placeholder="Nom"
              className="form-control"
              id="FirstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* <label htmlFor="LastName" className="form-name">Last Name</label> */}
            <input
              placeholder="Prénom"
              className="form-control"
              id="LastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* <label htmlFor="email" className="form-label">Email</label> */}
            <input
              placeholder="Email"
              className="form-control"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <img className="separateur" src={Separateur} alt="image" />
            {/* <label htmlFor="messege" className="form-control">Message</label> */}
            <textarea
              placeholder="Que voulez-vous nous dire?"
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {/* <ButtonContact /> */}
          <div className="mainButtonCart">
            <input
              className="buttonCart"
              type="button"
              value="Valider"
              onClick={Submit}
            />
          </div>
          <img className="lineTitleContact" src={LineTop} alt="image" />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
