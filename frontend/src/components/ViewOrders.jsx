import { useEffect, useState } from "react"
import axios from "axios"

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
    <div>
      <h2>ViewOrders</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Numéro de commande</th>
            <th>Article commandé</th>
            <th>Montant de la commande</th>
            {/* Ajoutez des colonnes pour afficher d'autres infos */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.lastname}</td>
              <td>{order.firstname}</td>
              <td>{order.num_cmd}</td>
              <td>{order.name_arti}</td>
              <td>{order.orderAmount} €</td>
              {/* Ajoutez des colonnes pour afficher d'autres infos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewOrders
