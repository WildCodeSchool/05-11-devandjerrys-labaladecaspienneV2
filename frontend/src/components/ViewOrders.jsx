import { useEffect, useState } from "react"
import axios from "axios"
import CadreHG from "../assets/coinHG.svg"
import CadreHD from "../assets/coinHD.svg"
import CadreBG from "../assets/coinBG.svg"
import CadreBD from "../assets/coinBD.svg"

const ViewOrders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders")
        console.info("Commandes récupérées:", response.data)
        setOrders(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error)
      }
    }

    fetchOrders()
  }, [])

  return (
    <div className="viewOrder">
      <h2>Liste des commandes</h2>
      <div className="cadreHaut">
        <img src={CadreHG} className="cadreHG" alt="Cadre haut gauche" />
        <img src={CadreHD} className="cadreHD" alt="Cadre haut droit" />
      </div>
      <div className="tableDiv">
        <table className="table">
          <thead>
            <tr>
              <th>N° de commande</th>
              <th>Nom</th>
              <th>Prénom</th>

              <th>Articles</th>
              <th>Montant</th>
              {/* Ajoutez des colonnes pour afficher d'autres infos */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.num_cmd}</td>
                <td>{order.lastname}</td>
                <td>{order.firstname}</td>
                <td>{order.name_arti}</td>
                <td>{order.orderAmount} €</td>
                {/* Ajoutez des colonnes pour afficher d'autres infos */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cadreBas">
        <img src={CadreBG} className="cadreBG" alt="Cadre bas gauche" />
        <img src={CadreBD} className="cadreBD" alt="Cadre bas gauche" />
      </div>
    </div>
  )
}

export default ViewOrders
