import { Link } from "react-router-dom"

export default function Burger() {
  return (
    <div className="BurgerBody">
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
