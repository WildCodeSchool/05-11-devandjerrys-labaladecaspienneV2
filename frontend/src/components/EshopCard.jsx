import { useEffect, useState } from "react"

import CadreEshop from "../assets/Images/CadreEshop.png"
import etiquette from "../assets/Images/etiquette.png"
export default function EshopCard({ id, price, image }) {
  const [isSeleted, setIsSelected] = useState(false)
  return (
    <div className="Eshop">
      <img className="Frame" src={CadreEshop} alt="cadre de l'image" />
      <div className="Price">
        <img
          className="Eshop-Price"
          src={etiquette}
          alt="etiquette, prix de l'artéfact"
        />
      </div>
    </div>
  )
}
