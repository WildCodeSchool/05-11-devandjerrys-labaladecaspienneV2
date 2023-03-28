import { useState, useEffect } from "react"
import axios from "axios"

function ButtonCart(props) {
  const [addCart, setAddCart] = useState([])
  const [idArti, setIdArti] = useState(props.artifactChosen.id)
  // const [userData, setUserData] = useState([])
  console.info(addCart)

  useEffect(() => {
    setIdArti(props.artifactChosen.id)
  }, [props.artifactChosen.id])

  // récupérer ici l'id utilisateur pour faire cart_id=user_id
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/users/${id}`).then((response) => {
  //     setUserData(response.data)
  //   })
  // }, [id])
  //

  const handleClick = () => {
    axios
      .post(`http://localhost:5000/hascart`, {
        cart_id: 1, // à modifier avec le user > userData.id
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
