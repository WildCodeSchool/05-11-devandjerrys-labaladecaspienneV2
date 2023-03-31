import { useState, useEffect } from "react"
import axios from "axios"

function ButtonCart(props) {
  const [addCart, setAddCart] = useState([])
  const [idArti, setIdArti] = useState(props.artifactChosen.id)

  console.info(addCart)

  useEffect(() => {
    setIdArti(props.artifactChosen.id)
  }, [props.artifactChosen.id])

  const handleClick = () => {
    axios
      .post(`http://localhost:5000/hascart`, {
        cart_id: localStorage.getItem("userId"), // à modifier avec le user > userData.id
        artifacts_id: idArti,
        quantity: 1,
      })
      .then((res) => setAddCart(res.data))
      .catch((err) => console.error(err))
    props.handleButtonClick() // appel de la fonction handleButtonClick reçue en tant que prop
  }

  return (
    <div className="mainButtonCart">
      <input
        className="buttonCart"
        type="button"
        value="Ajouter au panier"
        onClick={handleClick}
      />
    </div>
  )
}

export default ButtonCart
