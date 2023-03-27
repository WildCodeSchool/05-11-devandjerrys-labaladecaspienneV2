import deco1 from "@assets/Images/deco1.png"
import { useState, useEffect } from "react"
import axios from "axios"
import EshopCard from "@components/EshopCard"
import { Link } from "react-router-dom"

function Theme({ id }) {
  const [themeChosen, setThemeChosen] = useState(null)
  const [artiSelect, setArtiSelect] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:5000/themes/${id}`)
      .then((res) => setThemeChosen(res.data) && console.info(res.data))
      .catch((error) => console.error(error))
  }, [id])

  useEffect(() => {
    axios.get("http://localhost:5000/artifacts").then((res) => {
      const artifactsWithId = res.data.map((artifact) => {
        return {
          ...artifact,
          id: artifact.id,
        }
      })
      setArtiSelect(artifactsWithId)
    })
  }, [themeChosen])
  const handleButtonClick = (theme) => {
    localStorage.setItem("selectedTheme", theme)
  }

  return (
    <div className="HomeModal" key={themeChosen?.id}>
      <div className="decorTop">
        <img src={deco1} alt="decor" />
      </div>
      <div className="description">
        <h1>{themeChosen?.name_theme}</h1>
        <div className="themeArtifacts">
          {(() => {
            const filteredArtifacts = artiSelect

              .filter((arti) =>
                arti.themesAll.includes(themeChosen?.name_theme)
              )
              .slice(0, 3)
            return filteredArtifacts.length > 0 ? (
              <div className="mainArtifactList">
                <div className="artifactList">
                  {filteredArtifacts.map((arti) => (
                    <EshopCard
                      key={arti.id}
                      id={arti.id}
                      images={arti.images}
                      name_arti={arti.name_arti}
                      price={arti.price}
                    />
                  ))}
                </div>
                <Link to="/eshop">
                  <input
                    className="buttonCart"
                    type="button"
                    value="Voir les autres artéfacts"
                    onClick={() => handleButtonClick(themeChosen?.name_theme)}
                  />
                </Link>
              </div>
            ) : (
              <div className="noArtifact">
                <div className="message">
                  Pas encore d'artifact pour ce thème.
                </div>
                <Link to="/eshop">
                  <input
                    className="buttonCart"
                    type="button"
                    value="Visiter la boutique"
                  />
                </Link>
              </div>
            )
          })()}
        </div>

        <div className="textDescription">{themeChosen?.description_theme}</div>
      </div>
      <div className="decorBut">
        <img src={deco1} alt="decor" />
      </div>
    </div>
  )
}
export default Theme
