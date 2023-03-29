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

  // const { id } = useParams()
  // const [userData, setUserData] = useState([])
  // const [userOrder, setUserOrder] = useState([])
  // // const [isEditing, setIsEditing] = useState(false)

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/users/${id}`).then((response) => {
  //     setUserData(response.data)
  //   })
  // }, [id])
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/users/${id}/orders`).then((response) => {
  //     setUserOrder(response.data)
  //   })
  // }, [id])

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   axios
  //     .put(`http://localhost:5000/users/${id}`, userData)
  //     .then((response) => {
  //       setUserData(response.data)
  //       setIsEditing(false)
  //       console.info("BIBI", id)
  //       alert("Votre profil a été mis à jour")
  //       window.location.href = `/eshop`
  //     })

  //   axios.get(`http://localhost:5000/users/${id}`).then((response) => {
  //     setUserOrder(response.data)
  //   })
  // }
  // function handleLogout() {
  //   localStorage.removeItem("token")
  //   window.location.href = "/home"
  // }
  useEffect(() => {
    verifyTokenAdmin()
  }, [])
  return (
    <>
      <Header />
      <div className="divHeadEshop" /* key={userData.id} */>
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
      </div>
      <div className="AdminAccountPage">
        {/* {userData || ( */}
        <div className="AdminDivGrid">
          <div className="AdminGridDivs Grid1">
            <AddArtifact />
          </div>
          <div className="AdminGridDivs Grid2">
            <AddTheme />
          </div>
          <div className="AdminGridDivs Grid4">
            <EditTheme />
          </div>
          <div className="AdminGridDivs Grid3">
            <ViewOrders />
          </div>
          <div className="AdminGridDivs Grid5">
            <EditArtifact />
          </div>
        </div>
      </div>
      <Burger />
      <Footer />
    </>
  )
}
