import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LineTop from "../assets/Images/head_line.png"
import Paypal from "../assets/Images/paypal.png"
import Visa from "../assets/Images/visa.png"
import VirB from "../assets/Images/virement.png"
import PaymentConfirm from "../components/PaymentConfirm"

function Payment() {
  const location = useLocation()
  const [showFormPayment, setShowFormPayment] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const { totalAmount, cartArti } = location.state

  console.info("Total amount in Payment :", totalAmount)

  const toggleFormPayment = () => {
    setShowFormPayment(!showFormPayment)
  }

  const handlePayment = () => {
    setShowConfirmation(true)
    saveOrderToDatabase(totalAmount, cartArti)
  }

  const saveOrderToDatabase = async (totalAmount, cartArti) => {
    try {
      const orderResponse = await axios.post("http://localhost:5000/orders", {
        users_id: 1, // voir pour récupérer l'id de l'utilisateur
        orderAmount: totalAmount,
        articleInfos: [...cartArti],
      })
      console.info(orderResponse)
    } catch (error) {
      console.error("Error saving order to database:", error)
    }
  }

  return (
    <div className="mainDivPayment">
      <Header />
      <div>
        <p className="titleHeadPayment">LA BALADE CASPIENNE</p>
      </div>
      <div>
        <img className="lineTitlePayment" src={LineTop} alt="image" />
      </div>
      {!showConfirmation ? (
        <>
          <div className="disappear">
            <div className="divTitlePayment">
              <p className="titlePayment">Paiement en ligne</p>
            </div>
            <p className="pPayment">Montant total de votre commande :</p>
            <p className="pCost">{totalAmount} €</p>

            <p className="pPayment">Veuillez choisir un mode de paiement</p>
            <div className="divPayment">
              <div className="divPaypal">
                <img className="imgPaypal" src={Paypal} alt="image" />
              </div>
              <div className="divVisa" onClick={toggleFormPayment}>
                <img className="imgVisa" src={Visa} alt="image" />
              </div>
              <div className="divVirement">
                <img className="imgVirement" src={VirB} alt="image" />
              </div>
            </div>
            {/* ***** Formulaire de paiement ***** */}
            <div className={`formPayment ${showFormPayment ? "visible" : ""}`}>
              <div className="secondDivForm">
                <p className="pTPayment">
                  Veuillez saisir vos informations de paiement
                </p>
                <label htmlFor="nomCB">Nom sur la carte</label>
                <input type="text" id="nomCB" placeholder="Prénom Nom"></input>
                <label htmlFor="numCB">N° de carte</label>
                <input
                  type="text"
                  id="numCB"
                  placeholder="....  ....  ....  ...."
                ></input>
                <div className="thirdDivForm">
                  <div className="fourDiv">
                    <label htmlFor="expCB">Date d'expiration</label>
                    <input type="text" id="expCB" placeholder="MM/AA"></input>
                  </div>
                  <div className="fourDiv">
                    <label htmlFor="crypCB">Cryptogramme visuel</label>
                    <input type="text" id="crypCB" placeholder="..."></input>
                  </div>
                </div>
                <button onClick={handlePayment}>Payer</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <PaymentConfirm />
      )}
      <Footer />
    </div>
  )
}

export default Payment
