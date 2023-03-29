import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import ButtonCart from "@components/ButtonCart"

function Contact() {
  return (
    <div>
      <Header />
      <div className="contact">
        <p>Contact</p>
        <ButtonCart />
      </div>
      <Burger />
      <Footer />
    </div>
  )
}

export default Contact
