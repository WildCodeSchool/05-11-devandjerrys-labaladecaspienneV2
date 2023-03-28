// QUAND SITE DEPLOYÉ à remplacer par > import { useLocation } from "react-router-dom"
import { useState } from "react"
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share"
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
            <FacebookIcon
              className="iconsRS"
              size={30}
              round={true}
              iconFillColor={"#804000"}
            />
          </FacebookShareButton>

          <LinkedinShareButton url={shareUrl} title={"La Balade Caspienne"}>
            <LinkedinIcon
              className="iconsRS"
              size={30}
              round={true}
              iconFillColor={"#804000"}
            />
          </LinkedinShareButton>

          <TwitterShareButton url={shareUrl} hashtag={"#labaladecaspienne"}>
            <TwitterIcon
              className="iconsRS"
              size={30}
              round={true}
              iconFillColor={"#804000"}
            />
          </TwitterShareButton>

          <WhatsappShareButton url={shareUrl} hashtag={"#labaladecaspienne"}>
            <WhatsappIcon
              className="iconsRS"
              size={30}
              round={true}
              iconFillColor={"#804000"}
            />
          </WhatsappShareButton>

          <EmailShareButton url={shareUrl} redirectUri={shareUrl}>
            <EmailIcon
              className="iconsRS"
              size={30}
              round={true}
              iconFillColor={"#804000"}
            />
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
