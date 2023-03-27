import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import PlayerVideo from "../components/PlayerVideo"
import Share from "@components/Share"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"
import LineTop from "../assets/Images/head_line.png"

export default function About() {
  const [image, setImage] = useState("")

  useEffect(() => {
    // Effectuez une requête GET pour récupérer l'URL de l'image
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/avatar`
        )
        setImage(response.data.imageUrl)
      } catch (error) {
        console.error("Error fetching image:", error)
      }
    }

    fetchImage()
  }, [])
  return (
    <div>
      <Header />
      <div className="About">
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
        <h2 className="nameH">Alexandra Panastier</h2>
        <div className="divAboutShare">
          <Share />
        </div>
        <Link to="/events">
          <div className="AboutEvent">
            Calendrier des évènements pour rencontrer l'artiste
          </div>
        </Link>
        <aside className="aboutMe">
          <div className="photoPres">
            <img
              className="img-alex"
              src={`${import.meta.env.VITE_BACKEND_URL}/${image}`}
              alt="Alexandra"
            />
            <div className="quote1">
              <blockquote className="aboutText1">
                Je m'appelle Alexandra et je suis une artiste passionnée des
                contrées de l'imaginaire. Je me suis spécialisée depuis quelques
                années dans la sculpture sur pâte polymère et bois pour créer
                des objets et des bijoux que j'appelle "artéfacts". Je travaille
                principalement avec de la pâte polymère, un matériau qui me
                permet de créer des formes précises et détaillées avec une
                grande liberté de création. J'utilise également du bois comme
                support pour mes créations, leur donnant ainsi une dimension
                supplémentaire.
              </blockquote>
            </div>
          </div>

          <div className="textPres">
            <div className="quote2">
              <blockquote className="aboutText2">
                Mes artéfacts sont inspirés par la culture de l'imaginaire, plus
                particulièrement par les univers fantastiques, horrifiques et
                science-fictionnels dont je puise mon inspiration dans des
                œuvres de la littérature tel que Lovecraft ou Tolkien, du cinéma
                par le biais de films ou séries fantastiques comme Miss
                Peregrine et les enfants particuliers ou Dark Cristal et des
                jeux vidéo puisant également dans l'inspiration imaginaire de
                l’extraordinaire ou de l’horrifique tel que The Witcher ou Zelda
                . Chaque artéfact que je crée raconte une histoire et transporte
                celui qui le porte dans un univers fantastique et ces créations
                sont avant tout un moyen de partager ma passion pour la culture
                de l'imaginaire avec d'autres. Je souhaite qu'elles inspirent et
                émerveillent, mais aussi qu'elles ouvrent la voie à la
                découverte de nouveaux univers imaginaires.
              </blockquote>
            </div>
            <div className="quote3">
              <blockquote className="aboutText3">
                Vous pourrez retrouver mes artéfacts dans ce merveilleux site ou
                également à des salons ou expositions où je partage mon travail
                avec un public plus large. Si vous souhaitez avoir une création
                unique correspondant à ce que vous désirez, n'hésitez pas à
                prendre contact avec moi afin que je puisse réaliser votre
                commande.
              </blockquote>
            </div>
          </div>
        </aside>

        <div className="videoDiv">
          <img className="videoAngle" src={LineTop} alt="image" />
          <PlayerVideo />
          <img className="videoAngle" src={LineTop} alt="image" />
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
