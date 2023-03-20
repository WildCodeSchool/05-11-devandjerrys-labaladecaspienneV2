import { useState } from "react"
import { Link } from "react-router-dom"

import logo from "../assets/Images/logo_baladecaspienne.png"
import star from "../assets/Images/brown_star.png"
import angleL from "../assets/Images/white_angle_L.png"
import angleR from "../assets/Images/white_angle_R.png"
import ModalConnexion from "./ModalConnexion"

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(!openModal)
  const handleAuthClick = () => setIsAuthenticated(!isAuthenticated)

  return (
    <div className="Header">
      <div className="mainDivHeader">
        <img className="headerAngle angleL" src={angleL} alt="image" />
        <img className="headerStar" src={star} alt="image" />
        <Link className="linkHeader" to="/eshop">
          <p className="itemsNavHeader">Boutique</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <Link className="linkHeader" to="/about">
          <p className="itemsNavHeader">Qui suis-je ?</p>
        </Link>
        <Link className="linkHeader" to="/home">
          <div className="divLogoHeader">
            <img className="logoHeader" src={logo} alt="image" />
          </div>
        </Link>
        {isAuthenticated ? (
          <Link className="linkHeader" to="/useraccount">
            <p className="itemsNavHeader" onClick={handleAuthClick}>
              Mon Profil
            </p>
          </Link>
        ) : (
          <div className="linkHeader">
            <p className="itemsNavHeader" onClick={toggleModal}>
              Mon Profil
            </p>
          </div>
        )}
        <img className="headerStar" src={star} alt="image" />
        <Link className="linkHeader" to="#">
          <p className="itemsNavHeader">Panier</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <img className="headerAngle angleR" src={angleR} alt="image" />
      </div>
      {openModal && (
        <ModalConnexion
          isOpen={openModal}
          closeModal={toggleModal}
          handleAuthClick={handleAuthClick}
        />
      )}
    </div>
  )
}

export default Header
