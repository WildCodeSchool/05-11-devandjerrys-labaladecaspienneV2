// eslint-disable-next-line
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Share from "@components/Share"
import Deco2 from "../assets/Images/head_line.png"
// import Star from "../assets/Images/brown_star.png"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import ButtonCart from "@components/ButtonCart"

export default function EshopDetails() {
  const { id } = useParams()
  const [artifactChosen, setArtifactChosen] = useState(`${id}`)
  const pictureGroups = [[], [], []]
  const [isMessageDisplayed, setIsMessageDisplayed] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [isScaledIndex, setIsScaledIndex] = useState(-1)

  const themesWithCommas = artifactChosen.themesAll.join(", ")

  const handleImageClick = (index) => {
    setIsScaledIndex(index === isScaledIndex ? -1 : index)
  }

  const handleButtonClick = () => {
    setIsMessageDisplayed(true)
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/artifacts/${id}`).then((res) => {
      setArtifactChosen(res.data)
      setQuantity(res.data.stock)
    })
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
      <div className="Esd-Header">
        <Header />
      </div>{" "}
      <div className="divHeadEshop">
        <div>
          <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        </div>
        <div>
          <img className="lineTitleEshop" src={Deco2} alt="image" />
        </div>
      </div>
      <div className="Esd-All" key={artifactChosen.id}>
        <h2 className="nameArtiShop">{artifactChosen.name_arti}</h2>
        <div className="divPriceDesc">
          <p>{artifactChosen.price}€</p>
        </div>

        <div className="Esd-pictures">
          <div className="pictureDiv1">
            {pictureGroups[2].map((image, index) => (
              <div key={`picture-0-${index}`}>
                <div
                  className={`picture1 ${
                    isScaledIndex === index ? "scaled" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={import.meta.env.VITE_BACKEND_URL + image}
                    alt={`Image ${index}`}
                    title="Cliquez pour zoomer"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pictureDiv2">
            {pictureGroups[1].map((image, index) => (
              <div key={`picture-1-${index}`}>
                <div
                  className={`picture2 ${
                    isScaledIndex === 3 + index ? "scaled" : ""
                  }`}
                  onClick={() => handleImageClick(3 + index)}
                >
                  <img
                    src={import.meta.env.VITE_BACKEND_URL + image}
                    alt={`Image ${3 + index}`}
                    title="Cliquez pour zoomer"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pictureDiv3">
            {pictureGroups[0].map((image, index) => (
              <div key={`picture-2-${index}`}>
                <div
                  className={`picture3 ${
                    isScaledIndex === 6 + index ? "scaled" : ""
                  }`}
                  onClick={() => handleImageClick(6 + index)}
                >
                  <img
                    src={import.meta.env.VITE_BACKEND_URL + image}
                    alt={`Image ${6 + index}`}
                    title="Cliquez pour zoomer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Esd-bttn">
          {quantity > 0 && !isMessageDisplayed ? (
            <ButtonCart
              artifactChosen={artifactChosen}
              handleButtonClick={handleButtonClick}
            />
          ) : (
            !isMessageDisplayed && (
              <div className="outOfStockMessage">
                Trop tard ! Le produit est épuisé.
              </div>
            )
          )}
        </div>

        {isMessageDisplayed && (
          <div className="messDisplayed">
            <div className="confirmCartMess">
              Le produit a été ajouté au panier !
            </div>
            <Link to="/eshop" className="linkToCart">
              <input
                className="otherButtonED"
                type="button"
                value="Retour à la boutique"
              />
            </Link>
            <Link to="/cart" className="linkToCart">
              <input
                className="otherButtonED"
                type="button"
                value="Voir mon panier"
              />
            </Link>
          </div>
        )}
        <div className="E-desciption">
          <p>Description : {artifactChosen.description_arti}</p>
          <p>Matières utilisées : {artifactChosen.matiere_arti}</p>
          {/* <p>Les thèmes : {artifactChosen.themesAll}</p> */}
          <p>Les thèmes : {artifactChosen.themesAll.join(", ")}</p>
        </div>

        <div className="Esd-share">
          <div className="E-Share">
            <Share />
          </div>
        </div>

        <img className="lineTitleEshop2" src={Deco2} alt="décoration" />
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
