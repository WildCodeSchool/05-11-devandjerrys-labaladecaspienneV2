import deco1 from "@assets/Images/deco1.png"
import collier from "../assets/collier.jpg"

function HomeModal(props) {
  const images = [collier, collier, collier]
  return (
    <div className="HomeModal">
      <div className="decorTop">
        <img src={deco1} alt="decor" />
      </div>
      <div className="foto">
        {images.map((image) => (
          <img src={image} alt="detaile" key={image} />
        ))}
      </div>
      <div className="description">
        <h2>THEM</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde qui, nesciunt quod illo nisi perferendis doloribus aspernatur
          alias vel beatae temporibus, tempora molestias ipsum est nemo laborum
          et expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Fugiat et omnis voluptate cupiditate. Labore fugiat, modi magni natus
          quos dolore voluptatibus non veniam minus? Nesciunt sit non ullam nemo
          officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Culpa, cum quod, iure ipsa dolorum nemo aliquid rerum nostrum facilis
          sequi doloribus alias, atque earum possimus veniam? Laudantium qui
          placeat ad.
        </p>
      </div>
      <div className="decorBut">
        <img src={deco1} alt="decor" />
      </div>
    </div>
  )
}
export default HomeModal
