import { Link } from "react-router-dom"
// import { useState, useEffect } from "react"

export default function CartButton() {
  return (
    <div className="CartButton">
      <div className="all">
        <div className="center">
          <div className="explainer">
            <span> </span>
          </div>
          <Link className="linkBurger" to="/home">
            <div className="text">Accueil</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
