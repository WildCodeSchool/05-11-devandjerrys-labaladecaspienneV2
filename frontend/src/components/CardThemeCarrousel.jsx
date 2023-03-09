import cadres from "../assets/cadreInterieur.svg"
import { useState } from "react"
import cadreHG from "../assets/coinHautG.png"
import cadreHD from "../assets/coinHautD.png"
import cadreBG from "../assets/coinBasG.png"
import cadreBD from "../assets/coinBasD.png"

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
            <div className="colorCadreResp">
              <img
                src={cadres}
                style={{ backgroundImage: `url(${backgroundCadre})` }}
                alt="cadre"
                className="cadreResp"
              />
            </div>
            <div className="nomThemeResp">
              <h3 className="themesResp">{props.name_theme}</h3>
            </div>
          </div>
        </button>
        {afficherElement && (
          <div className="allDescript">
            <div className="cadreHaut">
              <img src={cadreHG} className="cadre" />
              <img src={cadreHD} className="cadre" />
            </div>
            <div className="descriptResp">
              <h3 className="descript">{props.description_theme}</h3>
              <img src={props.picture_theme} className="imageDescript" />
            </div>
            <div className="cadreBas">
              <img src={cadreBG} className="cadre" />
              <img src={cadreBD} className="cadre" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
