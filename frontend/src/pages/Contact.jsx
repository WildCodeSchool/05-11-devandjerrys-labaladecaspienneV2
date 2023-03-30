import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import LineTop from "../assets/Images/head_line.png"

function Contact() {
  const addClass = () => {
    document.body.classList.add("sent")
  }

  return (
    <div className="contactAll">
      <Header />
      <p id="titleHeadEshop">LA BALADE CASPIENNE</p>
      <img id="lineTitleEshop" src={LineTop} alt="image" />
      <div className="contactBody">
        <div className="wrapper centered">
          <article className="letter">
            <div className="side">
              <h1 className="contacttittle">Contactez-moi</h1>
              <p className="contactph">
                <textarea
                  className="contactextarea"
                  placeholder="Votre message"
                ></textarea>
              </p>
            </div>
            <div className="side">
              <p className="contactph">
                <input
                  className="contactinput"
                  type="text"
                  placeholder="Votre nom"
                />
              </p>
              <p className="contactph">
                <input
                  className="contactinput"
                  type="email"
                  placeholder="Votre email"
                />
              </p>
              <p className="contactph">
                <button id="sendLetter" onClick={addClass}>
                  Envoyer
                </button>
              </p>
            </div>
          </article>
          <div className="envelope front"></div>
          <div className="envelope back"></div>
        </div>
        <p className="result-message centered">Merci pour votre message</p>
        <Burger />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
