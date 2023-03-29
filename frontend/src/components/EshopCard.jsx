import CadreEshop from "../assets/Images/CadreEshop.png"
import Star from "../assets/Images/brown_star.png"

import { Link } from "react-router-dom"
import { useState } from "react"

export default function EshopCard(props) {
  const [setIsSelected] = useState(false)

  const handleClick = () => !setIsSelected

  const artiLink = `/eshopdetails/${props.id}`
  console.info(artiLink)

  return (
    <Link to={artiLink} style={{ textDecoration: "none" }}>
      <div className="Eshop" onClick={handleClick}>
        <div className="Arti-name">
          <h2>{props.name_arti}</h2>
        </div>
        <section className="Image">
          <div
            className="ArtImage"
            style={{
              backgroundImage: `url(${
                import.meta.env.VITE_BACKEND_URL + props.images[0]
              })`,
            }}
          >
            <img className="Frame" src={CadreEshop} alt={props.name_arti} />
            <img className="E-Star" src={Star} alt="étoile" />
          </div>
        </section>

        <div className="Eshop-Price">
          <p>{props.price} €</p>
        </div>
      </div>
    </Link>
  )
}
