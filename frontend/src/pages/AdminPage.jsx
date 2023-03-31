import { useEffect } from "react"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import AddTheme from "../components/AddTheme"
import EditTheme from "../components/EditTheme"
import AddArtifact from "../components/AddArtifact"
import EditArtifact from "../components/EditArtifact"
// import Separator from "../assets/Images/separateur.png"
import LineTop from "../assets/Images/head_line.png"
import ViewOrders from "@components/ViewOrders"
import { useNavigate } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

export default function AdminPage() {
  const navigate = useNavigate()

  const verifyTokenAdmin = () => {
    const token = localStorage.getItem("token")
    axios({
      method: "POST",
      url: "http://localhost:5000/auth",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.info(res.data.role, res.data.verifyData)
      if (!res.data.verifyData || !res.data.role) {
        console.info("userAccount test")
        navigate(`/home`)
      }
      // else if (res.data.role) console.log("poirzoierjhoizjeojizjoizer")
      // reste a ajouter les redirection si  token valide
    })
  }

  useEffect(() => {
    verifyTokenAdmin()
  }, [])

  function handleLogout() {
    localStorage.removeItem("token")
    window.location.href = "/home"
  }
  return (
    <div className="adminPage">
      <Header />
      <div className="divHeadEshop" /* key={userData.id} */>
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
      </div>
      <div className="AdminAccountPage">
        {/* {userData || ( */}
        <div className="AdminDivGrid">
          <Carousel showIndicators={true} showStatus={false}>
            <AddArtifact />
            <AddTheme />
            <EditArtifact />
            <EditTheme />
            <ViewOrders />
          </Carousel>

          <button className="buttonCart" onClick={handleLogout}>
            Se deconnecter
          </button>
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
