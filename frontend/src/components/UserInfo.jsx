import CoinHG from "../assets/coinHG.svg"
import CoinHD from "../assets/coinHD.svg"
import CoinBG from "../assets/coinBG.svg"
import CoinBD from "../assets/coinBD.svg"
import Separateur from "../assets/Images/separateur.png"

export default function UserInfo(props) {
  return (
    <div className="allUserProfil">
      <div className="userInfo">
        <h3 className="titreInfo">Profil</h3>
        <div className="coinHaut">
          <img className="coinHG" src={CoinHG} />
          <img className="coinHD" src={CoinHD} />
        </div>
        <div className="allEncart">
          <div className="encart">
            <div className="encartSousTitre">
              <h4 className="sousTitre"> Nom de Famille : </h4>
              <input></input>
            </div>
            <img className="separateur" src={Separateur} />
          </div>
          <div className="encart">
            <div className="encartSousTitre">
              <h4 className="sousTitre"> Prenom : </h4>
              <input></input>
            </div>
            <img className="separateur" src={Separateur} />
          </div>
          <div className="encart">
            <div className="encartSousTitre">
              <h4 className="sousTitre"> Adresse : </h4>
              <input></input>
            </div>
            <img className="separateur" src={Separateur} />
          </div>
          <div className="encart">
            <div className="encartSousTitre">
              <h4 className="sousTitre"> Code Postal : </h4>
              <input></input>
            </div>
            <img className="separateur" src={Separateur} />
          </div>
          <div className="encart">
            <div className="encartSousTitre">
              <h4 className="sousTitre"> Ville : </h4>
              <input></input>
            </div>
            <img className="separateur" src={Separateur} />
          </div>
        </div>
        <div className="coinBas">
          <img className="coinBG" src={CoinBG} />
          <img className="coinBD" src={CoinBD} />
        </div>
      </div>
    </div>
  )
}
