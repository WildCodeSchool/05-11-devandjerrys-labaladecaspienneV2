import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "../components/Burger"
import PlayerVideo from "../components/PlayerVideo"

import logo from "../assets/Images/logo_baladecaspienne.png"
import deco from "../assets/Images/deco.png"
import Photo from "../assets/collier.jpg"
import HeadLine from "../assets/Images/head_line.png"

export default function About() {
  return (
    <div>
      <Header />
      <div className="About">
        <img id="mobil" className="image" src={logo}></img>
        <h1>LA BALADE CASPIENNE</h1>
        <img id="image1" className="image" src={deco}></img>
        <h2 className="nameH">Alexandra Panastier</h2>

        <div className="aboutMe">
          <div className="photoPres">
            <img className="img-alex" src={Photo}></img>
            <p className="aboutText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam
              assumenda eos, reiciendis quibusdam est soluta quos provident ea
              voluptatem expedita dicta, qui maxime, ullam quam nobis repellat
              illum distinctio beatae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni perferendis omnis ullam! Possimus modi
              totam cum deserunt? Tempore iste consectetur quam enim quod
              aperiam, non numquam minus labore, veritatis soluta?
            </p>
          </div>

          <div className="textPres">
            <p className="aboutText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam
              assumenda eos, reiciendis quibusdam est soluta quos provident ea
              voluptatem expedita dicta, qui maxime, ullam quam nobis repellat
              illum distinctio beatae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni perferendis omnis ullam! Possimus modi
              totam cum deserunt? Tempore iste consectetur quam enim quod
              aperiam, non numquam minus labore, veritatis soluta? Lorem ipsum
              dolor sit amet consectetur adipisicing elit.Ipsam assumenda eos,
              reiciendis quibusdam est soluta quos provident ea voluptatem
              expedita dicta, qui maxime, ullam quam nobis repellat illum
              distinctio beatae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni perferendis omnis ullam! Possimus modi
              totam cum deserunt? Tempore iste consectetur quam enim quod
              aperiam, non numquam minus labore, veritatis soluta?
            </p>
            <p className="aboutText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam
              assumenda eos, reiciendis quibusdam est soluta quos provident ea
              voluptatem expedita dicta, qui maxime, ullam quam nobis repellat
              illum distinctio beatae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni perferendis omnis ullam! Possimus modi
              totam cum deserunt? Tempore iste consectetur quam enim quod
              aperiam, non numquam minus labore, veritatis soluta?
            </p>
          </div>
        </div>

        <div className="videoDiv">
          <img className="videoAngle" src={HeadLine} alt="image" />
          <PlayerVideo />
          <img className="videoAngle" src={HeadLine} alt="image" />
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
