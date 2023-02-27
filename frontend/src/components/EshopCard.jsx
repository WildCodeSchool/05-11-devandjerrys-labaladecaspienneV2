import CadreEshop from "../assets/Images/CadreEshop.png"
import Star from "../assets/Images/brown_star.png"

export default function EshopCard(props) {
  return (
    <div className="Eshop">
      <div className="Arti-name">
        <h2>
          {/* {" "}
          Coffre Cthulhu */}
          {props.name_arti}
        </h2>
      </div>
      <section className="Image">
        <div
          className="ArtImage"
          style={{ backgroundImage: `url(${props.images})` }}
        >
          <img className="Frame" src={CadreEshop} alt={props.name_arti} />
          <img className="E-Star" src={Star} alt="étoile" />
        </div>
      </section>

      <div className="Eshop-Price">
        <div className="price">
          <p>{props.price} €</p>
        </div>
      </div>
    </div>
  )
}
