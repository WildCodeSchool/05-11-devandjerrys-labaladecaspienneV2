import { Link, useNavigate } from "react-router-dom"
import ModalConnexion from "./ModalConnexion"
import { useState } from "react"

// import { useState, useEffect } from "react"

export default function Burger() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const toggleModal = () => {
    setOpenModal((prevState) => !prevState)
  }

  const handleAuthClick = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  const handleMonProfilClick = () => {
    const userId = JSON.parse(localStorage.getItem("userId"))

    if (token) {
      navigate(`/useraccount/${userId}`)
    } else {
      toggleModal()
    }
  }
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
          {isAuthenticated ? (
            <Link
              className="linkBurger"
              to="/useraccount"
              onClick={handleAuthClick}
            >
              <div className="text">Connexion</div>
            </Link>
          ) : (
            <Link
              className="linkBurger"
              to="/useraccount"
              onClick={handleMonProfilClick}
            >
              <div className="text">Profil</div>
            </Link>
          )}
        </div>
      </div>
      {!token && (
        <ModalConnexion
          isOpen={openModal}
          closeModal={toggleModal}
          handleAuthClick={handleAuthClick}
        />
      )}
    </div>
  )
}
