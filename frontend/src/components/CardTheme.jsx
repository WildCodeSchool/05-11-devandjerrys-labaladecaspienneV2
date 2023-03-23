import cadres from "../assets/cadreInterieur.svg"
import { Link } from "react-router-dom"
// import { useState } from "react"

export default function CardTheme(props) {
  const backgroundCadre = props.picture_theme
  const themeLink = `/theme/${props.id}`
  return (
    <Link to={themeLink} style={{ textDecoration: "none" }}>
      <button
        className="buttonTheme"
        onClick={(event) => {
          event.preventDefault()
          props.onClick()
        }}
      >
        <div className="cardTheme">
          <div className="colorCadre">
            <img
              src={cadres}
              style={{ backgroundImage: `url(${backgroundCadre})` }}
              alt="cadre"
              className="cadre"
            />
          </div>
          <div className="nomTheme">
            <h4 className="themes">{props.name_theme}</h4>
          </div>
        </div>
      </button>
    </Link>
  )
}
