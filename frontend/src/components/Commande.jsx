import CoinHG from "../assets/coinHG.svg"
import CoinHD from "../assets/coinHD.svg"
import CoinBG from "../assets/coinBG.svg"
import CoinBD from "../assets/coinBD.svg"
import Star from "../assets/star.png"
import Separateur from "../assets/Images/separateur.png"

export default function Commande(props) {
  return (
    <div className="commandeHistorique">
      <div className="divCommande">
        <h3 className="titreCommande">Historique de Commande</h3>
        <div className="cadreHaut">
          <img src={CoinHG} className="coinHG" />
          <img src={CoinHD} className="coinHD" />
        </div>
        <div className="descriptCommande">
          <div className="propsCommande">
            <div className="ligneCommande">
              <div className="cadreLigne">
                <h4 className="lignes"> N° de Commande : </h4>
                <p className="lignes">azer</p>
              </div>
              <div className="cadreLigne">
                <h4 className="lignes"> État : </h4>
                <p className="lignes">azer</p>
              </div>
              <div className="cadreLigne">
                <h4 className="lignes"> Montant Payé : </h4>
                <p className="lignes">azer</p>
              </div>
            </div>
            <div className="detailCommande">
              <h4 className="lignesDetail">Détail</h4>
              <img src={Star} className="boutonDetail" />
            </div>
          </div>
          <div className="separateur">
            <img src={Separateur} />
          </div>
        </div>
        <div className="cadreBas">
          <img src={CoinBG} className="coinBG" />
          <img src={CoinBD} className="coinBD" />
        </div>
      </div>
    </div>
  )
}
