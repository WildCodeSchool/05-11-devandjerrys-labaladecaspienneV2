import { useEffect, useState } from "react"

import CadreEshop from "../assets/Images/CadreEshop.png"
import Artipicture from "../assets/Images/Artifact.png"

export default function EshopCard({ id, price, image, name_arti }) {
  // const [isSeleted, setIsSelected] = useState([])
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/atifacts")
  //     .then((res) => setIsSelected(res.data))
  //     .catch((err) => console.error(err))
  // }, [])
  return (
    <div className="Eshop">
      <div className="Arti-name">
        <h2>
          {" "}
          Coffre Cthulhu
          {/* {name_arti} */}
        </h2>
      </div>
      <div className="Image">
        <img className="Frame" src={CadreEshop} alt="cadre de l'image" />
        {/* <img className="Arti-photo" src={Artipicture} /> */}
      </div>
      <div className="Eshop-Price">
        <div className="price">
          <p> 100 €{/* {price} */}</p>
        </div>
      </div>
    </div>
  )
}
