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

function Footer() {
  return (
    <div className="Footer">
      {/* <img className="wave " src={wave} alt="greenWave" /> */}
      <div className="mainDivFooter">
        <img className="footerAngle angleL" src={angleR} alt="image" />
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={Insta} className="icon" alt="instagram Logo" />
        </a>
        <img className="footerStar" src={star} alt="image" />
        <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer">
          <img src={Facebook} className="icon" alt="facebook Logo" />
        </a>

        <img className="footerStar" src={star} alt="image" />
        <a href="https://www.tiktok.com/fr/" target="_blank" rel="noreferrer">
          <img src={Tiktok} className="icon" alt="tiktok Logo" />
        </a>

        <img className="footerStar" src={star} alt="image" />

        <Link to="/contact">
          <img src={Contact} className="icon" alt="contact Logo" />
        </Link>

        <img className="footerStar" src={star} alt="image" />
        <a href={doc} target="_blank" rel="noreferrer">
          <img src={LegalDoc} className="icon" alt="Legal document Logo" />
        </a>
        <img className="footerAngle angleR" src={angleL} alt="image" />
      </div>
    </div>
  )
}

export default Footer
