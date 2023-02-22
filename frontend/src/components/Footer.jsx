import Insta from "../assets/Icons/Instagram.svg"
import Facebook from "../assets/Icons/Facebook.svg"
import Tiktok from "../assets/Icons/Tiktok.svg"
import Contact from "../assets/Icons/Contact.svg"
import LegalDoc from "../assets/Icons/Legal Document.svg"
import Star from "../assets/Images/star.png"
import CoinD from "../assets/Images/CoinDroit.png"
import CoinG from "../assets/Images/CoinGauche.png"
import doc from "../assets/Doc/MentionsLegales.pdf"
import wave from "../assets/Icons/wave.svg"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="FooterContainer">
      <img className="wave " src={wave} alt="greenWave" />
      <div className="Footer2">
        <div className="FooterDeco">
          <img src={CoinG} alt="decoration" />
          <img src={CoinD} alt="decoration" />
        </div>
        <div className="FooterIcons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={Insta} className="icon" alt="instagram Logo" />
          </a>
          <img src={Star} className="star" alt="StarPicture" />
          <a
            href="https://fr-fr.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} className="icon" alt="facebook Logo" />
          </a>
          <img src={Star} className="star" alt="StarPicture" />
          <a href="https://www.tiktok.com/fr/" target="_blank" rel="noreferrer">
            <img src={Tiktok} className="icon" alt="tiktok Logo" />
          </a>
          <img src={Star} className="star" alt="StarPicture" />

          <Link to="/contact">
            <img src={Contact} className="icon" alt="contact Logo" />
          </Link>

          <img src={Star} className="star" alt="StarPicture" />
          <a href={doc} target="_blank" rel="noreferrer">
            <img src={LegalDoc} className="icon" alt="Legal document Logo" />
          </a>
        </div>
      </div>
    </div>
  )
}
