import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"

function Contact() {
  const addClass = () => {
    document.body.classList.add("sent")
  }

  return (
    <div className="contactBody">
      <Header />
      <div className="wrapper centered">
        <article className="letter">
          <div className="side">
            <h1>Contactez-nous</h1>
            <p>
              <textarea placeholder="Votre message"></textarea>
            </p>
          </div>
          <div className="side">
            <p>
              <input type="text" placeholder="Votre nom" />
            </p>
            <p>
              <input type="email" placeholder="Votre email" />
            </p>
            <p>
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
      <Footer />
    </div>
  )
}

export default Contact
