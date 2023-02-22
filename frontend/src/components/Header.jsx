import "../styles/header.scss"
import logo from "../assets/logo_baladecaspienne.png"
import star from "../assets/brown_star.png"
import angleL from "../assets/white_angle_L.png"
import angleR from "../assets/white_angle_R.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="Header">
      <div className="mainDivHeader">
        <img className="headerAngle angleL" src={angleL} alt="image" />
        <img className="headerStar" src={star} alt="image" />
        <Link to="/artifacts">
          <p className="itemsNavHeader">Boutique</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <p className="itemsNavHeader">Qui suis-je ?</p>
        <Link to="/home">
          <div className="divLogoHeader">
            <img className="logoHeader" src={logo} alt="image" />
          </div>
        </Link>
        <Link to="#">
          <p className="itemsNavHeader">Connexion</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <Link to="#">
          <p className="itemsNavHeader">Panier</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <img className="headerAngle angleR" src={angleR} alt="image" />
      </div>
    </div>
  )
}

export default Header
