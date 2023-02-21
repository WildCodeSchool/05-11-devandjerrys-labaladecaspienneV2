import "../styles/header.scss"
import logo from "../assets/logo_baladecaspienne.png"
import star from "../assets/brown_star.png"
import angleL from "../assets/white_angle_L.png"
import angleR from "../assets/white_angle_R.png"

function Header() {
  return (
    <div className="Header">
      <div className="mainDivHeader">
        <img className="headerAngle angleL" src={angleL} alt="image" />
        <img className="headerStar" src={star} alt="image" />
        <p className="itemsNavHeader">Boutique</p>
        <img className="headerStar" src={star} alt="image" />
        <p className="itemsNavHeader">Qui suis-je ?</p>
        <div className="divLogoHeader">
          <img className="logoHeader" src={logo} alt="image" />
        </div>
        <p className="itemsNavHeader">Connexion</p>
        <img className="headerStar" src={star} alt="image" />
        <p className="itemsNavHeader">Panier</p>
        <img className="headerStar" src={star} alt="image" />
        <img className="headerAngle angleR" src={angleR} alt="image" />
      </div>
    </div>
  )
}

export default Header
