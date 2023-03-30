import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function ModalConnexion({ isOpen, closeModal }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const navigate = useNavigate()
  const [showCreateAccount, setShowCreateAccount] = useState(true)
  const token = localStorage.getItem("token")
  console.info("eeeeeeeeeee", token)
  console.info(setNewUser)
  const handleClick = (e) => {
    e.preventDefault()

    axios
      .post(`http://localhost:5000/users/login/`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.info(res.data)
        if (res.headers["x-access-token"]) {
          setIsLoggedIn(true)

          const userId = res.data.id
          localStorage.setItem("token", res.headers["x-access-token"])
          localStorage.setItem("userId", res.data.id)
          localStorage.setItem("role", res.data.role)
          console.info("token", localStorage.getItem("token")) // console.info(res.data.token)
          setShowCreateAccount(false)
          if (newUser) {
            alert("Votre compte a été créé avec succès!")
          }
          if (res.data.role === 0) {
            navigate(`/useraccount/${userId}`)
          } else if (res.data.role === 1) {
            navigate(`/adminpage`)
          }
          closeModal(false)
          //   setShowCreateAccount(false)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleCreateAccount = (e) => {
    e.preventDefault()
    // Vérifier si l'email existe déjà dans la base de données
    axios.get(`http://localhost:5000/users?email=${email}`).then((res) => {
      if (res.data.length > 0) {
        alert("Cet email est déjà utilisé")
        return
      }
      axios
        .post(`http://localhost:5000/users/`, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.headers["x-access-token"]) {
            setIsLoggedIn(true)

            const userId = res.data.id
            localStorage.setItem("token", res.headers["x-access-token"])
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("role", res.data.role)
            console.info("token", localStorage.getItem("token")) // console.info(res.data.token)
            setShowCreateAccount(false)
            if (newUser) {
              alert("Votre compte a été créé avec succès!")
            }
            if (res.data.role === false) {
              navigate(`/useraccount/${userId}`)
            } else {
              alert("Votre compte a été créé avec succès!")
            }
          }
        })
        .catch((error) => {
          console.error(error)
          alert("Une erreur est survenue lors de la création de votre compte.")
        })
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

          {!isLoggedIn && !newUser && (
            <button className="MC-bttn" onClick={handleClick}>
              Se connecter
            </button>
          )}
          {showCreateAccount && (
            <button className="MC-bttn" onClick={handleCreateAccount}>
              Créer un compte
            </button>
          )}
          {/* {!isLoggedIn && (
            <button
              className="MC-bttn"
              onClick={showCreateAccount ? handleCreateAccount : handleClick}
            >
              {showCreateAccount ? "Se connecter" : "Créer un compte"}
            </button>
          )} */}
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

// if (!res.data.insertId) {
//   console.info(res.data.insertId)
//   setIsLoggedIn(true)
//   setNewUser(true)
//   setShowCreateAccount(false)

//   //   localStorage.setItem("token", res.data.token)
//   localStorage.setItem("res.data.insertId", res.data.insertId)
//   const newUserId = res.data.insertId
//   navigate(`/useraccount/${newUserId}`)

//   //   setNewUser(true)
//   closeModal(false)
//   setShowCreateAccount(false) //  masquer le bouton "Créer un compte"
// }
