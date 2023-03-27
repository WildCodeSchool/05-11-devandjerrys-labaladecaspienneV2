import CoinHG from "../assets/coinHG.svg"
import CoinHD from "../assets/coinHD.svg"
import CoinBG from "../assets/coinBG.svg"
import CoinBD from "../assets/coinBD.svg"
import Separateur from "../assets/Images/separateur.png"

export default function UserInfo(props) {
  const { userData, onSubmit } = props

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <div className="allUserProfil">
      <div className="userInfo">
        <h3 className="titreInfo">Profil</h3>
        <div className="coinHaut">
          <img className="coinHG" src={CoinHG} />
          <img className="coinHD" src={CoinHD} />
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="allEncart">
            <div className="encart">
              <div className="encartSousTitre">
                <h4 className="sousTitre"> Nom de Famille : </h4>
                {/* <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={userData.lastname}
                  placeholder={userData.lastname}
                  onChange={(event) =>
                    setUserData({ ...userData, lastname: event.target.value })
                  }
                /> */}
              </div>
              <img className="separateur" src={Separateur} />
            </div>
            <div className="encart">
              <div className="encartSousTitre">
                <h4 className="sousTitre"> Prenom : </h4>
                <input defaultValue={userData.firstname} />
              </div>
              <img className="separateur" src={Separateur} />
            </div>
            <div className="encart">
              <div className="encartSousTitre">
                <h4 className="sousTitre"> Adresse : </h4>
                <input defaultValue={userData.adress_delivery} />
              </div>
              <img className="separateur" src={Separateur} />
            </div>
            <div className="encart">
              <div className="encartSousTitre">
                <h4 className="sousTitre"> Code Postal : </h4>
                <input defaultValue={userData.zip_delivery} />
              </div>
              <img className="separateur" src={Separateur} />
            </div>
            <div className="encart">
              <div className="encartSousTitre">
                <h4 className="sousTitre"> Ville : </h4>
                <input defaultValue={userData.city_delivery} />
              </div>
              <img className="separateur" src={Separateur} />
            </div>
          </div>
        </form>
        <div className="coinBas">
          <img className="coinBG" src={CoinBG} />
          <img className="coinBD" src={CoinBD} />
        </div>
      </div>
    </div>
  )
}
