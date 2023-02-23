import Insta from "../assets/Icons/Instagram.svg"
import Facebook from "../assets/Icons/Facebook.svg"
import Tiktok from "../assets/Icons/Tiktok.svg"
import Contact from "../assets/Icons/Contact.svg"
import LegalDoc from "../assets/Icons/Legal Document.svg"
import star from "../assets/Images/brown_star.png"
import angleL from "../assets/Images/white_angle_L.png"
import angleR from "../assets/Images/white_angle_R.png"
import doc from "../assets/Doc/MentionsLegales.pdf"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="mainDivFooter">
        <img className="footerAngle angleL" src={angleR} alt="decoration" />
        <div className="FooterIcons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={Insta} className="icon" alt="instagram Logo" />
          </a>
          <img src={star} className="star" alt="StarPicture" />
          <a
            href="https://fr-fr.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} className="icon" alt="facebook Logo" />
          </a>
          <img src={star} className="star" alt="StarPicture" />
          <a href="https://www.tiktok.com/fr/" target="_blank" rel="noreferrer">
            <img src={Tiktok} className="icon" alt="tiktok Logo" />
          </a>
          <img src={star} className="star" alt="StarPicture" />

          <Link to="/contact">
            <img src={Contact} className="icon" alt="contact Logo" />
          </Link>

          <img src={star} className="star" alt="StarPicture" />
          <a href={doc} target="_blank" rel="noreferrer">
            <img src={LegalDoc} className="icon" alt="Legal document Logo" />
          </a>
        </div>
        <img className="footerAngle angleR" src={angleL} alt="decoration" />
      </div>
    </div>
  )
}
