import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
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
  const { id } = useParams()
  const [userData, setUserData] = useState([])
  const [setUserOrder] = useState([])
  const [setIsEditing] = useState(false)

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

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .put(`http://localhost:5000/users/${id}`, userData)
      .then((response) => {
        // console.log("Poulette", response.data)
        setUserData(response.data)
        setIsEditing(false)
      })
      .catch((error) => {
        console.error("Erreur :", error)
      })

    axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setUserOrder(response.data)
    })
  }
  return (
    <div>
      <Header />
      <div className="pageUser" key={userData.id}>
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
              <UserInfo userData={userData} onSubmit={handleSubmit} />
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
