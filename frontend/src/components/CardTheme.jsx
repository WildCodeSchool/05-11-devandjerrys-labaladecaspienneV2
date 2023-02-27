import cadres from "../assets/cadreInterieur.svg"
// import { Link } from "react-router-dom"

export default function CardTheme(props) {
  return (
    <div>
      {/* <Link to={/theme/${props.themes.id}}> /} */}
      <button className="buttonTheme">
        <div
          className="cardTheme"
          style={{ backgroundImage: `url(${cadres})` }}
        >
          <img src={props.picture_theme} alt="cadre" className="cadre" />
          <div className="nomTheme">
            <h3 className="themes">{props.name_theme}</h3>
          </div>
        </div>
      </button>
      {/* {/ </Link> */}
    </div>
  )
}
