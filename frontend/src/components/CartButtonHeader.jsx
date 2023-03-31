import { Link } from "react-router-dom"
// import { useState, useEffect } from "react"

export default function CartButtonHeader() {
  return (
    <div className="CartButtonBody">
      <div className="all">
        <div className="centcart">
          <Link className="linkBurger" to="/cart">
            <div className="cartext">Panier</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
