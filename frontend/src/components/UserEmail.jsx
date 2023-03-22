import CoinHG from "../assets/coinHG.svg"
import CoinHD from "../assets/coinHD.svg"
import CoinBG from "../assets/coinBG.svg"
import CoinBD from "../assets/coinBD.svg"
import Separateur from "../assets/Images/separateur.png"

export default function UserEmail(props) {
  return (
    <div className="userEmail">
      <h3 className="titreConnexion">Connexions</h3>
      <div className="cadreEmail">
        <div className="cadreHaut">
          <img className="cadreHG" src={CoinHG} />
          <img src={CoinHD} className="cadreHD" />
        </div>
        <div className="cadreConnexion">
          <div className="entreEmail">
            <h4 className="titreEmail"> Email : </h4>
            <input className="inputEmail"></input>
          </div>
          <img src={Separateur} className="separateur" />
          <div className="entreMotdepasse">
            <h4 className="titreMotdepasse"> Mot de Passe : </h4>
            <input className="inputMotdepasse" type="password"></input>
          </div>
        </div>
        <div className="cadreBas">
          <img src={CoinBG} className="cadreBG" />
          <img src={CoinBD} className="cadreBD" />
        </div>
      </div>
    </div>
  )
}
