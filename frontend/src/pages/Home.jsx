import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../assets/Images/logo_baladecaspienne.png"
import deco from "../assets/Images/deco.png"
import deco1 from "../assets/Images/deco1.png"
import Burger from "@components/Burger"

import { useState, useEffect } from "react"
import axios from "axios"
// import { Link } from "react-router-dom"
import CardTheme from "../components/CardTheme"
import CardThemeCarrousel from "../components/CardThemeCarrousel"

export default function Home() {
  const [themes, setThemes] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/themes").then((response) => {
      setThemes(response.data)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className="Home">
        <img id="mobil" className="image" src={logo}></img>
        <h1>LA BALADE CASPIENNE</h1>
        <img id="image1" className="image" src={deco}></img>
        <h2>
          Une promenade, une histoire au coeur de la culture de l'imaginaire.
        </h2>
        <div id="paragraph">
          <p>
            Entrez dans le monde fascinant de la culture de l'imaginaire, où les
            histoires fantastiques prennent vie dans des créations artisanales
            uniques inspirés par les contes de fées, les légendes et les mythes
            de toutes cultures.
          </p>
          <p>
            Chaque pièce est conçue avec soin et passion, en utilisant des
            matériaux de qualité pour vous offrir une expérience magique et
            enchanteur. Vous pourrez trouver des artéfacts, objets ou bijoux et
            bien d'autres créations encore renfermant toute la magie de
            l'imaginaire. Chaque article est fabriqué à la main avec amour, pour
            vous offrir une expérience inoubliable et vous emporter dans un
            monde imaginaire où tout est possible.
          </p>
          <p>
            Venez découvrir la collection d'articles artisanaux de la culture de
            l'imaginaire et laissez votre esprit s'évader.
          </p>
        </div>
        <img id="image2" className="image" src={deco1}></img>
        <h2>Les Immaginaires</h2>

        <img id="image3" className="image" src={deco1}></img>
        <div className="card-theme">
          {themes.map((theme) => (
            <CardTheme
              key={theme.id}
              picture_theme={theme.picture_theme}
              name_theme={theme.name_theme}
              description_theme={theme.description_theme}
            />
          ))}
        </div>
        <div className="card-themeResp">
          {themes.map((theme) => (
            <CardThemeCarrousel
              key={theme.id}
              picture_theme={theme.picture_theme}
              name_theme={theme.name_theme}
              description_theme={theme.description_theme}
            />
          ))}
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
