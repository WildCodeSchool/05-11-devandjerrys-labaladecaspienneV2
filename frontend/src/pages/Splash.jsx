import { useState, useEffect } from "react"
import Home from "./Home"
import porte_droite from "../assets/Images/porte_droite_3.png"
import porte_gauche from "../assets/Images/porte_gauche_3.png"

export default function Splash() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    })

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`door-container ${isOpen ? "open" : ""}`}>
      <div className="door-left">
        <img className="left" src={porte_gauche} alt="Porte gauchee" />
      </div>
      <div className="door-right">
        <img className="right" src={porte_droite} alt="Porte droite" />
      </div>
      {
        <div className="splash-home">
          <Home />
        </div>
      }
      <div class="glow-effect"></div>
    </div>
  )
}
