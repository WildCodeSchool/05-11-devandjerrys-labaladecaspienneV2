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
  console.info(token)

  const handleClick = (e) => {
    e.preventDefault()

    axios
      .post(`http://localhost:5000/users/login/`, {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(token)
        if (res.data.token) {
          setIsLoggedIn(true)
          localStorage.setItem("token", res.data.token)
          // console.log(res.data.token)
          setShowCreateAccount(true)
          const userId = res.data.id
          if (newUser) {
            navigate(`/useraccount/${res.data.insertId}`)
          } else {
            navigate(`/useraccount/${userId}`)
          }
          closeModal(false)
          //   setShowCreateAccount(false)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // eslint-disable-next-line no-unused-vars
  const handleCreateAccount = (e) => {
    e.preventDefault()

    // Vérifier si l'email existe déjà
    axios
      .get(`http://localhost:5000/users?email=${email}`)
      .then((res) => {
        if (res.data.length > 0) {
          alert(
            "Cet email est déjà utilisé. Veuillez utiliser un autre e-mail ou vous connecter avec votre compte."
          )
          return
        }

        // Sinon créer un nouveau compte utilisateur
        axios
          .post(`http://localhost:5000/users`, {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.data.insertId) {
              setNewUser(true)
              localStorage.setItem("res.data.insertId", res.data.insertId)
              const newUserId = res.data.insertId
              navigate(`/useraccount/${newUserId}`)
              alert("Votre compte a été créé avec succès!")
              closeModal(false)
            } else {
              alert(
                "Une erreur est survenue lors de la création de votre compte."
              )
            }
          })
          .catch((error) => {
            console.error(error)
            alert(
              "Une erreur est survenue lors de la création de votre compte."
            )
          })
      })
      .catch((error) => {
        console.error(error)
        alert("Une erreur est survenue lors de la vérification de l'email.")
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
          {!isLoggedIn && (
            <>
              <button
                className="MC-bttn"
                // eslint-disable-next-line no-undef
                onClick={() => navigate(`/useraccount/${res.data.id}`)}
              >
                Se connecter
              </button>
              {showCreateAccount ? (
                <button className="MC-bttn" onClick={handleCreateAccount}>
                  Créer un compte
                </button>
              ) : null}
              {newUser && (
                <button
                  className="MC-bttn"
                  // eslint-disable-next-line no-undef
                  onClick={() => navigate(`/useraccount/${res.data.id}`)}
                >
                  Se connecter
                </button>
              )}
            </>
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
