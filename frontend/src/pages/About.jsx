import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import PlayerVideo from "../components/PlayerVideo"
import Share from "@components/Share"
import { Link } from "react-router-dom"

import LineTop from "../assets/Images/head_line.png"
import Photo from "../assets/collier.jpg"

export default function About() {
  return (
    <div>
      <Header />
      <div className="About">
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
        <h2 className="nameH">Alexandra Panastier</h2>
        <Link to="/events">
          <div className="AboutEvent">
            Calendrier des évènements pour rencontrer l'artiste
          </div>
        </Link>
        <div className="aboutMe">
          <div className="photoPres">
            <img className="img-alex" src={Photo}></img>
            <p className="aboutText">
              Je m'appelle Alexandra et je suis une artiste passionnée des
              contrés de l'imaginaire. Je me suis spécialisée depuis quelques
              années dans la sculpture sur pâte polymère et bois pour créer des
              objets et des bijoux que j'appelle "artéfacts". Je travaille
              principalement avec de la pâte polymère, un matériau qui me permet
              de créer des formes précises et détaillées avec une grande liberté
              de création. J'utilise également du bois comme supports pour mes
              créations, leur donnant ainsi une dimension supplémentaire.
            </p>
          </div>

          <div className="textPres">
            <p className="aboutText">
              Mes artéfacts sont inspirés par la culture de l'imaginaire, plus
              particulièrement par les univers fantastiques, horrifique et
              science-fictionnels dont je puise mon inspiration dans des œuvres
              de la littérature tel que Lovecraft ou Tolkien, du cinéma par le
              biais de films ou séries fantastique comme Miss Peregrine et les
              enfants particuliers ou Dark Cristal et des jeux vidéo puisant
              également dans l'inspiration imaginaire de l’extraordinaire ou de
              l’horrifique tel que The Witcher ou Zelda . Chaque artéfact que je
              crée raconte une histoire et transporte celui qui le porte dans un
              univers fantastique et ces créations sont avant tout un moyen de
              partager ma passion pour la culture de l'imaginaire avec d'autres.
              Je souhaite qu'elles inspirent et émerveillent, mais aussi
              qu'elles ouvrent la voie à la découverte de nouveaux univers
              imaginaire.
            </p>

            <p className="aboutText">
              Vous pourrez retrouver mes artéfacts dans ce merveilleux site ou
              également à des salons ou expositions où je partage mon travail
              avec un public plus large. Si vous souhaitez avoir une création
              unique correspondant à ce que vous désirez, n'hésitez pas à
              prendre contacte avec moi afin que je puisse réaliser votre
              commande.
            </p>
          </div>
        </div>

        <div className="videoDiv">
          <img className="videoAngle" src={LineTop} alt="image" />
          <PlayerVideo />
          <img className="videoAngle" src={LineTop} alt="image" />
        </div>
      </div>
      <div className="divAboutShare">
        <Share />
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
