import cadres from "../assets/cadreInterieur.svg"

// import { Link } from "react-router-dom"

export default function CardTheme(props) {
  const backgroundCadre = props.picture_theme

  return (
    <div>
      <button className="buttonTheme">
        <div className="cardTheme">
          <img
            src={cadres}
            style={{ backgroundImage: `url(${backgroundCadre})` }}
            alt="cadre"
            className="cadre"
          />
          <div className="nomTheme">
            <h3 className="themes">{props.name_theme}</h3>
          </div>
        </div>
      </button>
    </div>
  )
}
