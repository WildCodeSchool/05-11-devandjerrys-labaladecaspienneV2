import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Deco from "../assets/Images/deco.png"
import Deco2 from "../assets/Images/head_line.png"
import Star from "../assets/Images/brown_star.png"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function EshopDetails() {
  const { id } = useParams()
  const [artifactChosen, setArtifactChosen] = useState(`${id}`)
  const pictureGroups = [[], [], []]

  useEffect(() => {
    axios
      .get(`http://localhost:5000/artifacts/${id}`)
      .then((res) => setArtifactChosen(res.data))
    // .catch((error) => console.error(error))
  }, [id])

  if (artifactChosen.images) {
    const uniqueImages = artifactChosen.images.filter(
      (image, index, self) => self.indexOf(image) === index
    )
    for (let i = 0; i < uniqueImages.length; i++) {
      const image = uniqueImages[i]
      if (i % 3 === 1) {
        pictureGroups[0].push(image)
      } else if (i % 3 === 2) {
        pictureGroups[1].push(image)
      } else {
        pictureGroups[2].push(image)
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="Esd-All" key={artifactChosen.id}>
        <div className="E-Title">
          <h3>LA BALADE CASPIENNE</h3>
          <img className="E-deco" src={Deco} alt="décoration" />
          <h2>{artifactChosen.name_arti}</h2>
          <img className="E-deco" src={Deco2} alt="décoration" />
          <div className="E-desciption">
            <p>{artifactChosen.description_arti}</p>
            <p>{artifactChosen.themesAll}</p>
            <div className="Esd-pictures">
              <div className="picture2-3">
                {pictureGroups[0].map((image, index) => (
                  <div key={`picture-2-${index}`}>
                    <div className="picture3">
                      <img src={image} alt={`Image ${6 + index}`} />
                    </div>
                  </div>
                ))}

                <div className="-3">
                  {pictureGroups[1].map((image, index) => (
                    <div key={`picture-1-${index}`}>
                      <div className="picture2">
                        <img src={image} alt={`Image ${3 + index}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="picture2-3">
                {pictureGroups[2].map((image, index) => (
                  <div key={`picture-0-${index}`}>
                    <div className="mainPicture">
                      <img src={image} alt={`Image ${index}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Esd-price">
              <p>{artifactChosen.price}€</p>
            </div>
            <div className="E-stock">
              <h4>En stock</h4>
              <img className="Esd-star" src={Star} alt="star" />
              <p>Livraison en</p>
              <p>1 à 2 semaines</p>
            </div>
            <div> </div>
            <div className="Esd-stock">
              <p>
                En stock
                <br />
                Livraison en 1 à 2 semaines
              </p>
            </div>
            <div>
              <img className="E-deco2" src={Deco2} alt="décoration" />
            </div>
          </div>
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
