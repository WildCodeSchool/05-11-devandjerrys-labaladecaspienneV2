import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Separator from "../assets/Images/separateur.png"
import LineTop from "../assets/Images/head_line.png"

export default function UserAccount() {
  return (
    <>
      <Header />
      <div className="divHeadEshop">
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
      </div>
      <div className="UserAccountPage">
        <div className="UserDivGrid">
          <div className="UserGridDivs Grid1">
            <span className="Grid1Title">Profil</span>
            <div className="Grid1Div">
              <p>Nom de Famille = Mitchell's</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>Prénom = John</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>Adresse = 40, Avenue de la Liberté</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>Code Postal = 940677</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>Ville = Pas Trouvé</p>
            </div>
          </div>
          <div className="UserGridDivs Grid2">
            <span className="Grid2Title">Connexions</span>
            <div className="Grid2Div">
              <p>
                Email : <br /> ............
              </p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>
                Mot de Passe : <br /> ............
              </p>
            </div>
          </div>
          <div className="UserGridDivs Grid3">
            <span className="Grid3Title">Commandes / Historique</span>
            <div className="Grid3Div">
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
              <img className="UserSeparator" src={Separator} alt="" />
              <p>N° commande : 564496549 état : Livré</p>
              <p>état : Livré</p>
              <p>Montant payé: 156,9€</p>
            </div>
          </div>
        </div>
      </div>
      <Burger />
      <Footer />
    </>
  )
}
