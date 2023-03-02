import cadres from "../assets/cadreInterieur.svg"
// import { Link } from "react-router-dom"

export default function CardEvent(props) {
  return (
    <div>
      {/* <Link to={/theme/${props.themes.id}}> /} */}
      <button className="buttonEvent">
        <div
          className="cardEvent"
          style={{ backgroundImage: `url(${cadres})` }}
        >
          <img src={props.picture_theme} alt="cadre" className="cadre" />
          <div className="nomEvent">
            <h3 className="events">{props.name_event}</h3>
          </div>
        </div>
      </button>
      {/* {/ </Link> */}
    </div>
  )
}
