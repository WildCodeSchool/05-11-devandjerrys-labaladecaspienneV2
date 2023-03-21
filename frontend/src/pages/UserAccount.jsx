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

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUserData(response.data)
    })
  }, [id])
  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}/orders`).then((response) => {
      setUserOrder(response.data)
      // console.log(userOrder)
    })
  }, [id])
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
                <p>Prénom : {userData?.firstname}</p>
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
                {userOrder.map((order) => (
                  <div key={order.id}>
                    <p>N° commande : {order.num_cmd}</p>
                    <p>Montant payé: {order.order_amount}€</p>
                    <img className="UserSeparator" src={Separator} alt="" />
                  </div>
                ))}
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
