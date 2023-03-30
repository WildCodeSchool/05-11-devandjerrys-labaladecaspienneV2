import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

import Headline from "../assets/Images/Head_line.png"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Vertical from "../assets/Images/separateurOcreVertical.svg"
import Horizontal from "../assets/Images/separateurOcreHorizontal.svg"
import CoinHG from "../assets/coinHG.svg"
import CoinHD from "../assets/coinHD.svg"
import CoinBG from "../assets/coinBG.svg"
import CoinBD from "../assets/coinBD.svg"
import Separateur from "../assets/Images/separateur.png"
import Star from "../assets/star.png"

export default function UserAccount() {
  const navigate = useNavigate()

  const { id } = useParams()
  const [userData, setUserData] = useState([])
  const [userOrder, setUserOrder] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  console.info(isSaved)
  const verifyToken = () => {
    const token = localStorage.getItem("token")
    axios({
      method: "POST",
      url: "http://localhost:5000/auth",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.info(res.data.verifyData)
      if (!res.data.verifyData) {
        console.info("userAccount test")
        navigate(`/home`)
      } // reste a ajouter les redirection si  token valide
    })
  }

  useEffect(() => {
    verifyToken()
    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUserData(response.data)
      // localStorage.setItem("userData", JSON.stringify(response.data))
    })
  }, [id])

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}/orders`).then((response) => {
      setUserOrder(response.data)
    })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .put(`http://localhost:5000/users/${id}`, userData)
      .then((response) => {
        setUserData(response.data)
        setIsEditing(false)
        setIsSaved(true)
        alert("Votre profil a été mis à jour")
        window.location.href = `/eshop`
      })

    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUserOrder(response.data)
    })
  }
  useEffect(() => {
    if (!isEditing) {
      axios.get(`http://localhost:5000/users/${id}`).then((response) => {
        setUserData(response.data)
      })
    }
  }, [id, isEditing])
  function handleLogout() {
    localStorage.removeItem("token")
    window.location.href = "/home"
  }

  return (
    <div>
      <Header />
      <div className="pageUser" key={userData.id}>
        <div className="titrePage">
          <h2 className="titre">LA BALADE CASPIENNE</h2>
          <img src={Headline} className="headLine" />
        </div>
        {userData && (
          <div className="infoPage">
            <div className="toutContenaire">
              <div className="contenaireGauche">
                <div>
                  <div className="allUserProfil">
                    <div className="userInfo">
                      <h3 className="titreInfo">Profil</h3>
                      <div className="coinHaut">
                        <img className="coinHG" src={CoinHG} />
                        <img className="coinHD" src={CoinHD} />
                      </div>
                      {isEditing ? (
                        <form onSubmit={handleSubmit}>
                          <div className="allEncart">
                            <div className="encart">
                              <div className="encartSousTitre">
                                <h4 className="sousTitre">
                                  {" "}
                                  Nom de Famille :{" "}
                                </h4>
                                <input
                                  type="text"
                                  name="firstname"
                                  id="firstname"
                                  value={userData.lastname}
                                  placeholder={userData.lastname}
                                  onChange={(event) =>
                                    setUserData({
                                      ...userData,
                                      lastname: event.target.value,
                                    })
                                  }
                                />
                              </div>
                              <img className="separateur" src={Separateur} />
                            </div>
                            <div className="encart">
                              <div className="encartSousTitre">
                                <h4 className="sousTitre"> Prenom : </h4>
                                <input
                                  value={userData.firstname}
                                  placeholder={userData.firstname}
                                  onChange={(event) =>
                                    setUserData({
                                      ...userData,
                                      firstname: event.target.value,
                                    })
                                  }
                                />
                              </div>
                              <img className="separateur" src={Separateur} />
                            </div>
                            <div className="encart">
                              <div className="encartSousTitre">
                                <h4 className="sousTitre"> Email : </h4>
                                <input
                                  value={userData.email}
                                  placeholder={userData.email}
                                  onChange={(event) =>
                                    setUserData({
                                      ...userData,
                                      email: event.target.value,
                                    })
                                  }
                                />
                              </div>
                              <img className="separateur" src={Separateur} />
                            </div>
                            <div className="encart">
                              <div className="encartSousTitre">
                                <h4 className="sousTitre"> Adresse : </h4>
                                <input
                                  value={userData.address_delivery}
                                  placeholder={userData.address_delivery}
                                  onChange={(event) =>
                                    setUserData({
                                      ...userData,
                                      address_delivery: event.target.value,
                                    })
                                  }
                                />
                              </div>
                              <img className="separateur" src={Separateur} />
                            </div>
                            <div className="encart">
                              <div className="encartSousTitre">
                                <h4 className="sousTitre"> Code Postal : </h4>
                                <input
                                  value={userData.zip_delivery}
                                  placeholder={userData.zip_delivery}
                                  onChange={(event) =>
                                    setUserData({
                                      ...userData,
                                      zip_delivery: event.target.value,
                                    })
                                  }
                                />
                              </div>
                              <img className="separateur" src={Separateur} />
                            </div>
                            <div className="encart">
                              <div className="encartSousTitre">
                                <h4 className="sousTitre"> Ville : </h4>
                                <input
                                  value={userData.town_delivery}
                                  placeholder={userData.town_delivery}
                                  onChange={(event) =>
                                    setUserData({
                                      ...userData,
                                      town_delivery: event.target.value,
                                    })
                                  }
                                />
                              </div>
                              <img className="separateur" src={Separateur} />
                            </div>
                            <button onClick={() => setIsEditing(true)}>
                              Enregistrer
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div className="allEncart">
                          <div className="encart">
                            <div className="encartSousTitre">
                              <h4 className="sousTitre"> Nom de Famille : </h4>
                              <p>{userData?.lastname}</p>
                            </div>
                            <img className="separateur" src={Separateur} />
                          </div>
                          <div className="encart">
                            <div className="encartSousTitre">
                              <h4 className="sousTitre"> Prénom : </h4>
                              <p>{userData?.firstname}</p>
                            </div>
                            <img className="separateur" src={Separateur} />
                          </div>
                          <div className="encart">
                            <div className="encartSousTitre">
                              <h4 className="sousTitre"> Email : </h4>
                              <p>{userData?.email}</p>
                            </div>
                            <img className="separateur" src={Separateur} />
                          </div>
                          <div className="encart">
                            <div className="encartSousTitre">
                              <h4 className="sousTitre"> Adresse : </h4>
                              <p>{userData?.address_delivery}</p>
                            </div>
                            <img className="separateur" src={Separateur} />
                          </div>
                          <div className="encart">
                            <div className="encartSousTitre">
                              <h4 className="sousTitre"> Code Postal : </h4>
                              <p>{userData?.zip_delivery}</p>
                            </div>
                            <img className="separateur" src={Separateur} />
                          </div>
                          <div className="encart">
                            <div className="encartSousTitre">
                              <h4 className="sousTitre"> Ville : </h4>
                              <p>{userData?.town_delivery}</p>
                            </div>
                            <img className="separateur" src={Separateur} />
                          </div>
                          <button onClick={() => setIsEditing(true)}>
                            Modifier
                          </button>
                        </div>
                      )}

                      <div className="coinBas">
                        <img className="coinBG" src={CoinBG} />
                        <img className="coinBD" src={CoinBD} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img src={Vertical} className="vertical" />
              <img src={Horizontal} className="horizontal" />
              <div className="commande">
                <div className="commandeHistorique">
                  <div className="divCommande">
                    <h3 className="titreCommande">Historique de Commandes</h3>
                    <div className="cadreHaut">
                      <img src={CoinHG} className="coinHG" />
                      <img src={CoinHD} className="coinHD" />
                    </div>
                    <div className="descriptCommande">
                      {userOrder.length === 0 ? (
                        <p>Pas de commande, pour le moment...</p>
                      ) : (
                        userOrder.map((order) => (
                          <div className="descriptCommandeSuite" key={order.id}>
                            <div className="propsCommande">
                              <div className="ligneCommande">
                                <div className="cadreLigne">
                                  <h4 className="lignes"> N° de Commande : </h4>
                                  <p className="lignes">{order.num_cmd}</p>
                                </div>
                                <div className="cadreLigne">
                                  <h4 className="lignes"> État : </h4>
                                  <p className="lignes">{order.status}</p>
                                </div>
                                <div className="cadreLigne">
                                  <h4 className="lignes"> Montant Payé : </h4>
                                  <p className="lignes">{order.orderAmount}</p>
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
                        ))
                      )}
                    </div>
                    <div className="cadreBas">
                      <img src={CoinBG} className="coinBG" />
                      <img src={CoinBD} className="coinBD" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="deconnexion">
              <button className="buttonCart" onClick={handleLogout}>
                Se deconnecter
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <Burger />
    </div>
  )
}
