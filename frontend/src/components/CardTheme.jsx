import cadres from "../assets/cadreInterieur.svg"

// import { Link } from "react-router-dom"

export default function CardTheme(props) {
  const backgroundCadre = props.picture_theme

  return (
    <div>
      <button className="buttonTheme">
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
    </div>
  )
}
