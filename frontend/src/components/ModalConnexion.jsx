import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ModalConnexion({ isOpen, closeModal }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (!isOpen) {
      return null
    }

    axios
      .post(`http://localhost:5000/users/login/`, {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res.data.user.id)
        if (res.data.token) {
          setIsLoggedIn(true)
          localStorage.setItem("token", res.data.token)
          // console.log( res.data.id)
          const userId = res.data.id

          navigate(`/useraccount/${userId}`)
          closeModal(false)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const myFunction = () => {
    const x = document.getElementById("passWord")
    if (x.type === "password") {
      x.type = "text"
    } else {
      x.type = "password"
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="MC-all">
      <h2>Connexion</h2>
      <div className="modalBg">
        <form onSubmit={handleClick}>
          <label className="MC-email">
            Email:
            <input
              className="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="MC-password">
            Mot de passe:
            <input
              id="passWord"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input
            className="check"
            type="checkbox"
            onClick={() => myFunction()}
          />
          {isLoggedIn ? (
            <div>Vous êtes connecté!</div>
          ) : (
            <button className="MC-bttn" type="submit">
              Se connecter
            </button>
          )}
        </form>
        <div className="footer">
          <button className="MC-co2" onClick={() => closeModal(false)}>
            Annuler
          </button>

          <button className="MC-co1" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalConnexion
