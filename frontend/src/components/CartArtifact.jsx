import { CiCircleMinus, CiCirclePlus, CiTrash } from "react-icons/ci"
import axios from "axios"
import { useState } from "react"
import Star from "../assets/Images/whiteStar.png"

function CartArtifact(props) {
  const [quantity, setQuantity] = useState(props.quantity)
  const [deleted, setDeleted] = useState(false)
  const [amount, setAmount] = useState(props.quantity * props.price)

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/hascart/${props.id_cart_has_artifacts}`)
      .then((res) => {
        props.updateCart(props.id_cart_has_artifacts, null, true)
        setDeleted(true)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleQuantityChange = (newQuantity) => {
    const newTotal = newQuantity * props.price
    setQuantity(newQuantity)
    setAmount(newTotal)
    axios
      .put(`http://localhost:5000/hascart/${props.id_cart_has_artifacts}`, {
        quantity: newQuantity,
        total: newTotal,
      })
      .then((res) => {
        props.updateCart(props.id_cart_has_artifacts, newQuantity, false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  if (deleted) {
    return null
  }

  return (
    <div className="MainCartArtifact1">
      <div className="MainCartArtifact2">
        <div className="CartArtifactImg">
          <img src={props.url_img} alt={props.name_arti} />
        </div>
        <div className="CartArtifactName">
          <p>{props.name_arti}</p>
        </div>
        <div className="CartArtifactQty">
          <CiCircleMinus
            onClick={() => handleQuantityChange(quantity - 1)}
            className={quantity > 1 ? "" : "hide"}
          />
          <p>{quantity} </p>
          <CiCirclePlus onClick={() => handleQuantityChange(quantity + 1)} />
        </div>
        <div className="CartArtifactPrice">
          <p>{props.price} €</p>
        </div>
        <div className="CartArtifactTotal">
          <p>{amount} €</p>
        </div>
        <div className="CartArtifactDelete">
          <CiTrash onClick={handleDelete} />
        </div>
      </div>
      <div className="Star">
        <img src={Star} alt="decoStar" />
      </div>
    </div>
  )
}

export default CartArtifact
