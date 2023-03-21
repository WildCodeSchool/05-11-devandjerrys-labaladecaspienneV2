// import { useState } from "react"
// import axios from "axios"

function ButtonCart(props) {
  // const [addCart, setAddCart] = useState([])

  // const handleClick = () => {
  //   axios
  //     .post(`http://localhost:5000/hascart`, {
  //       cart_id: 1,
  //       artifact: props.artifactChosen,
  //       quantity: 1,
  //     })
  //     .then((res) => setAddCart(res.data))
  //     .catch((err) => console.error(err))
  // }

  return (
    <div className="mainButtonCart">
      <input
        className="buttonCart"
        type="button"
        value="Ajouter au panier"
        // onClick={handleClick}
      />
    </div>
  )
}

export default ButtonCart
