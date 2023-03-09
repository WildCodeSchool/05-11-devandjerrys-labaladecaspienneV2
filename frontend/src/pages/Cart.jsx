import LineTop from "../assets/Images/head_line.png"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import { useState, useEffect } from "react"
import axios from "axios"
import CartArtifact from "../components/CartArtifact"
import { Link } from "react-router-dom"

function Cart() {
  const [cartArti, setCartArti] = useState([])
  const [totalAmount, setTotalAmount] = useState()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/1`)
      .then((res) => setCartArti(res.data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    const newTotalAmount = cartArti.reduce((acc, arti) => {
      return acc + arti.price * arti.quantity
    }, 0)
    setTotalAmount(newTotalAmount)
  }, [cartArti])

  const updateCart = (id, quantity, action) => {
    let newQuantity = quantity

    if (action === "add") {
      newQuantity += 1
    } else if (action === "remove") {
      newQuantity -= 1
    }

    axios
      .put(`http://localhost:5000/hascart/${id}`, { quantity: newQuantity })
      .then((res) => {
        const updatedCartArti = cartArti.map((arti) =>
          arti.id === id ? { ...arti, quantity: newQuantity } : arti
        )
        setCartArti(updatedCartArti)
        const newTotalAmount = updatedCartArti.reduce(
          (acc, arti) => acc + arti.price * arti.quantity,
          0
        )
        setTotalAmount(newTotalAmount)
      })

      .catch((err) => console.error(err))
  }

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
              <input
                className="buttonCart"
                type="button"
                value="Valider mon panier"
              />
            </div>
            <div className="CartMentions">
              <p>Les frais de livraison seront ajoutés à l'étape suivante.</p>
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
