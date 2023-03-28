import { useState, useEffect } from "react"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import Separator from "../assets/Images/separateur.png"
import LineTop from "../assets/Images/head_line.png"
import { useParams } from "react-router-dom"

export default function UserAccount() {
  const { id } = useParams()
  const [userData, setUserData] = useState([])
  const [userOrder, setUserOrder] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  console.info(isSaved)

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUserData(response.data)
      localStorage.setItem("userData", JSON.stringify(response.data))
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
    <>
      <Header />
      <div className="divHeadEshop" key={userData.id}>
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
      </div>
      <div className="UserAccountPage">
        {userData && (
          <div className="UserDivGrid">
            <div className="UserGridDivs Grid1">
              <span className="Grid1Title">Profil</span>
              <div className="Grid1Div">
                <p>Nom de Famille : {userData?.lastname}</p>
                <img className="UserSeparator" src={Separator} alt="" />
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">Prénom</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={userData?.firstname}
                      onChange={(event) =>
                        setUserData({
                          ...userData,
                          firstname: event.target.value,
                        })
                      }
                    />
                    <button onClick={() => setIsEditing(true)}>
                      Enregistrer
                    </button>
                  </form>
                ) : (
                  <div>
                    <p>Prénom : {userData?.firstname}</p>
                    <button onClick={() => setIsEditing(true)}>Modifier</button>
                  </div>
                )}
                <img className="UserSeparator" src={Separator} alt="" />
                <p>{userData?.adress_delivery}</p>
                <img className="UserSeparator" src={Separator} alt="" />
                <p>{userData?.zip_delivery}</p>
                <img className="UserSeparator" src={Separator} alt="" />
                <p>{userData?.country_delivery}</p>
              </div>
            </div>
            <div className="UserGridDivs Grid2">
              <span className="Grid2Title">Connexion</span>
              <div className="Grid2Div">
                <p>
                  Email : <br /> {userData?.email}
                </p>
              </div>
            </div>
            <div className="UserGridDivs Grid3">
              <span className="Grid3Title">Commandes / Historique</span>
              <div className="Grid3Div">
                {userOrder.length === 0 ? (
                  <p>Pas de commande, pour le moment...</p>
                ) : (
                  userOrder.map((order) => (
                    <div key={order.id}>
                      <p>N° commande : {order.num_cmd}</p>
                      <p> état : {order.status}</p>
                      <p>Montant payé: {order.orderAmount}€</p>
                      <img className="UserSeparator" src={Separator} alt="" />
                    </div>
                  ))
                )}
                <div>
                  <button onClick={handleLogout}>Se deconnecter</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Burger />
      <Footer />
    </>
  )
}
