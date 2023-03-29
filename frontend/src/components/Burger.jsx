import { Link } from "react-router-dom"
// import { useState, useEffect } from "react"

export default function Burger() {
  // const [menuPosition, setMenuPosition] = useState(0)

  // useEffect(() => {
  //   const handleResize = () => {
  //     // Récupère la hauteur de la fenêtre
  //     const windowHeight = window.innerHeight
  //     // Calcule la position du menu en fonction de la hauteur de la fenêtre
  //     const menuPosition = windowHeight - 1500
  //     setMenuPosition(menuPosition)
  //   }

  //   // Écoute les changements de taille de la fenêtre
  //   window.addEventListener("resize", handleResize)

  //   // Initialise la position du menu au chargement de la page
  //   handleResize()

  //   // Nettoie l'écouteur d'événements lorsqu'on démonte le composant
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])
  return (
    <div
      className="BurgerBody"
      // style={{ position: "fixed", bottom: menuPosition }}
    >
      <div className="all">
        <div className="lefter">
          <Link className="linkBurger" to="/eshop">
            <div className="text">Boutique</div>
          </Link>
        </div>
        <div className="left">
          <Link className="linkBurger" to="/about">
            <div className="text">Artiste</div>
          </Link>
        </div>
        <div className="center">
          <div className="explainer">
            <span> </span>
          </div>
          <Link className="linkBurger" to="/home">
            <div className="text">Accueil</div>
          </Link>
        </div>
        <div className="right">
          <Link className="linkBurger" to="/contact">
            <div className="text">Contact</div>
          </Link>
        </div>
        <div className="righter">
          <Link className="linkBurger" to="/useraccount">
            <div className="text">Profil</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
