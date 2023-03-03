import cadres from "../assets/cadreInterieur.svg"
import { useState } from "react"

export default function CardThemeCarrousel(props) {
  const backgroundCadre = props.picture_theme
  const [afficherElement, setAfficherElement] = useState(false)
  const toggleElement = () => {
    setAfficherElement(!afficherElement)
  }

  return (
    <div>
      <div className="positionCard">
        <button className="buttonThemeResp" onClick={toggleElement}>
          <div className="cardThemeResp">
            <img
              src={cadres}
              style={{ backgroundImage: `url(${backgroundCadre})` }}
              alt="cadre"
              className="cadreResp"
            />
            <div className="nomThemeResp">
              <h3 className="themesResp">{props.name_theme}</h3>
            </div>
          </div>
        </button>
        {afficherElement && (
          <div className="descriptResp">
            <h3 className="descript">{props.description_theme}</h3>
            <img src={props.picture_theme} className="imageDescript" />
          </div>
        )}
      </div>
    </div>
  )
}
