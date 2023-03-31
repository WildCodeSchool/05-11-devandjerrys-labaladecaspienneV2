import LineTop from "../assets/Images/head_line.png"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import { useState, useEffect } from "react"
import axios from "axios"
import CartArtifact from "../components/CartArtifact"
import { Link, useNavigate } from "react-router-dom"

function Cart() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState(null)
  const [cartArti, setCartArti] = useState([])
  const [totalAmount, setTotalAmount] = useState()
  // ------------Test get --------------------
  // const [userId, setUserId] = useState(null)
  const verifyToken = () => {
    const token = localStorage.getItem("token")
    axios({
      method: "POST",
      url: "http://localhost:5000/auth",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.info(res.data.userId)
      if (!res.data.verifyData) {
        console.info("userAccount test")
        navigate(`/home`)
      }
      setUserId(res.data.userId) // Définir l'ID de l'utilisateur ici
      getData(res.data.userId)
    })
  }

  const getData = (id) => {
    axios
      .get(`http://localhost:5000/cart/${id}`)
      .then((res) => setCartArti(res.data))
      .catch((err) => console.error(err))
  }

  const updateCart = (id, quantity, isDeleted) => {
    if (!isDeleted) {
      const newQuantity = quantity
      axios
        .put(`http://localhost:5000/hascart/${id}`, { quantity: newQuantity })
        .then((res) => {
          setCartArti((prevState) =>
            prevState.map((arti) =>
              arti.id_cart_has_artifacts === id
                ? { ...arti, quantity: newQuantity }
                : arti
            )
          )
        })
        .catch((err) => console.error(err))
    } else {
      getData(userId) // insérer l'id de l'utilisateur connecté
    }
  }

  useEffect(() => {
    verifyToken()

    // getData(1) // insérer l'id de l'utilisateur connecté
  }, [])

  useEffect(() => {
    const newTotalAmount = cartArti.reduce((acc, arti) => {
      return acc + arti.price * arti.quantity
    }, 0)
    setTotalAmount(newTotalAmount)
  }, [cartArti])
  console.info("Total amount in Payment:", totalAmount)

  return (
    <div className="mainCart">
      <Header />
      <div className="divHeadCart">
        <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        <img className="lineTitleEshop" src={LineTop} alt="image" />
      </div>
      <div className="divCartArtifact">
        {cartArti.length > 0 ? (
          <>
            {cartArti.map((arti) => (
              <CartArtifact
                key={arti.id_cart_has_artifacts}
                {...arti}
                updateCart={updateCart}
              />
            ))}

            <div className="totalPanier">
              <p>TOTAL DE VOTRE PANIER (TTC)</p>
              <p>{totalAmount} €</p>
            </div>
            <div className="Button">
              <Link to="/payment" state={{ totalAmount, cartArti }}>
                <input
                  className="buttonCart"
                  type="button"
                  value="Valider mon panier"
                />
              </Link>
            </div>
            <div className="CartMentions">
              {/* <p>Les frais de livraison seront ajoutés à l'étape suivante.</p> */}
              <p>Les frais de livraison sont offerts.</p>
            </div>
          </>
        ) : (
          <div className="empty">
            <p>Votre panier est vide.</p>
            <div className="Button">
              <Link to="/eshop">
                <input
                  className="buttonCart"
                  type="button"
                  value="Visiter la boutique"
                />
              </Link>
            </div>
          </div>
        )}
      </div>

      <img className="lineTitleEshop" src={LineTop} alt="image" />

      <Burger />
      <Footer />
    </div>
  )
}

export default Cart
// ------------------- A TESTER QUAND CONNEXION OK ------------------------------
// const getData = () => {
//   axios
//     .get(`http://localhost:5000/cart/${userId}`)
//     .then((res) => setCartArti(res.data))
//     .catch((err) => console.error(err))
//   console.info("user id :", userId)
// }

// const updateCart = (id, quantity, isDeleted) => {
//   if (!isDeleted) {
//     const newQuantity = quantity
//     axios
//       .put(`http://localhost:5000/hascart/${id}`, { quantity: newQuantity })
//       .then((res) => {
//         setCartArti((prevState) =>
//           prevState.map((arti) =>
//             arti.id_cart_has_artifacts === id
//               ? { ...arti, quantity: newQuantity }
//               : arti
//           )
//         )
//       })
//       .catch((err) => console.error(err))
//   } else {
//     getData(userId)
//   }
// }

// useEffect(() => {
//   axios.get(`http://localhost:5000/users/${userId}`).then((response) => {
//     setUserData(response.data)
//   })
// }, [userId])

// useEffect(() => {
//   if (userId) {
//     getData()
//   }
// }, [userId])

// useEffect(() => {
//   const newTotalAmount = cartArti.reduce((acc, arti) => {
//     return acc + arti.price * arti.quantity
//   }, 0)
//   setTotalAmount(newTotalAmount)
// }, [cartArti])
// console.info("Total amount in Payment:", totalAmount)
