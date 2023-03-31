// QUAND SITE DEPLOYÉ à remplacer par > import { useLocation } from "react-router-dom"
import { useState } from "react"
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share"
import { BsFacebook, BsWhatsapp, BsLinkedin, BsTwitter } from "react-icons/bs"
import { MdMail } from "react-icons/md"
import iconShare from "../assets/Images/share-white.png"
import iconClose from "../assets/Images/close.png"

function Share() {
  // QUAND SITE DEPLOYÉ à remplacer par > const shareUrl = useLocation()
  const shareUrl = "http://www.google.fr"

  const [isToggled, setToggled] = useState(false)

  const toggleShare = () => {
    setToggled(!isToggled)
  }

  return (
    <div className="mainDivShare">
      {isToggled && (
        <div className="divToggled">
          <FacebookShareButton url={shareUrl} hashtag={"#labaladecaspienne"}>
            <BsFacebook className="iconsRS" size={29} color="#004033" />
          </FacebookShareButton>

          <LinkedinShareButton url={shareUrl} title={"La Balade Caspienne"}>
            <BsLinkedin className="iconsRS" size={29} color="#004033" />
          </LinkedinShareButton>

          <TwitterShareButton url={shareUrl} hashtag={"#labaladecaspienne"}>
            <BsTwitter className="iconsRS" size={29} color="#004033" />
          </TwitterShareButton>

          <WhatsappShareButton url={shareUrl} hashtag={"#labaladecaspienne"}>
            <BsWhatsapp className="iconsRS" size={29} color="#004033" />
          </WhatsappShareButton>

          <EmailShareButton url={shareUrl} redirectUri={shareUrl}>
            <MdMail className="iconsRS" size={29} color="#004033" />
          </EmailShareButton>
        </div>
      )}
      <div className={isToggled ? "toggled" : "toggle"}>
        {isToggled ? (
          <div className="divToggle divClose" onClick={toggleShare}>
            <img className="closeIcon" src={iconClose} alt="y" />
          </div>
        ) : (
          <div className="divToggle divShare" onClick={toggleShare}>
            <img className="shareIcon" src={iconShare} alt="x" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Share
