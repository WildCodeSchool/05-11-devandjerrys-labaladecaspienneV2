import logo from "../assets/Images/logo_baladecaspienne.png"
import star from "../assets/Images/brown_star.png"
import angleL from "../assets/Images/white_angle_L.png"
import angleR from "../assets/Images/white_angle_R.png"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="Header">
      <div className="mainDivHeader">
        <img className="headerAngle angleL" src={angleL} alt="image" />
        <img className="headerStar" src={star} alt="image" />
        <Link className="linkHeader" to="/artifacts">
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
        <Link className="linkHeader" to="#">
          <p className="itemsNavHeader">Connexion</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <Link className="linkHeader" to="#">
          <p className="itemsNavHeader">Panier</p>
        </Link>
        <img className="headerStar" src={star} alt="image" />
        <img className="headerAngle angleR" src={angleR} alt="image" />
      </div>
    </div>
  )
}

export default Header
