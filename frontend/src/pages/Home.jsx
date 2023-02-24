import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../assets/Images/logo_baladecaspienne.png"
import deco from "../assets/Images/deco.png"
import deco1 from "../assets/Images/deco1.png"

import { useState, useEffect } from "react"
import axios from "axios"
// import { Link } from "react-router-dom"
import CardTheme from "../components/CardTheme"

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
        <h3>Cultures de l'imaginer?</h3>
        <div id="paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam
            assumenda eos, reiciendis quibusdam est soluta quos provident ea
            voluptatem expedita dicta, qui maxime, ullam quam nobis repellat
            illum distinctio beatae! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magni perferendis omnis ullam! Possimus modi totam
            cum deserunt? Tempore iste consectetur quam enim quod aperiam, non
            numquam minus labore, veritatis soluta?
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
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
