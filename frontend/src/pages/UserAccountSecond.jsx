import Commande from "../components/Commande"
import UserEmail from "../components/UserEmail"
import UserInfo from "../components/UserInfo"
import Headline from "../assets/Images/Head_line.png"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Vertical from "../assets/Images/separateurOcreVertical.svg"
import Horizontal from "../assets/Images/separateurOcreHorizontal.svg"

export default function UserAccount() {
  return (
    <div>
      <Header />
      <div className="pageUser">
        <div className="titrePage">
          <h2 className="titre">LA BALADE CAPSIENNE</h2>
          <img src={Headline} className="headLine" />
        </div>
        <div className="toutContenaire">
          <div className="contenaireGauche">
            <div className="userEmail">
              <UserEmail />
            </div>
            <div>
              <UserInfo />
            </div>
          </div>
          <img src={Vertical} className="vertical" />
          <img src={Horizontal} className="horizontal" />
          <div className="commande">
            <Commande />
          </div>
        </div>
      </div>
      <Footer />
      <Burger />
    </div>
  )
}
