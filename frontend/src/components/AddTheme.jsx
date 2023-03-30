import { TbAsterisk } from "react-icons/tb"
import React, { useState } from "react"
import axios from "axios"
import CadreHG from "../assets/coinHG.svg"
import CadreHD from "../assets/coinHD.svg"
import CadreBG from "../assets/coinBG.svg"
import CadreBD from "../assets/coinBD.svg"

const AddTheme = () => {
  const [nameTheme, setNameTheme] = useState("")
  const [descriptionTheme, setDescriptionTheme] = useState("")
  const [pictureTheme, setPictureTheme] = useState(null)
  const [archiveTheme, setArchiveTheme] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name_theme", nameTheme)
    formData.append("description_theme", descriptionTheme)
    formData.append("picture_theme", pictureTheme)
    formData.append("archive_theme", archiveTheme)

    try {
      await axios.post("http://localhost:5000/themes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      setNameTheme("")
      setDescriptionTheme("")
      setPictureTheme(null)
      setArchiveTheme(0)
      setSubmitSuccess(true)
    } catch (error) {
      console.error("Erreur lors de l'ajout du thème:", error)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureTheme(e.target.files[0])
    } else {
      setPictureTheme(null)
    }
  }

  return (
    <div className="addTheme">
      <h2>Ajouter un thème</h2>
      <div className="cadreHaut">
        <img src={CadreHG} className="cadreHG" alt="Cadre haut gauche" />
        <img src={CadreHD} className="cadreHD" alt="Cadre haut droit" />
      </div>
      <form className="interieurCadre" onSubmit={handleSubmit}>
        <label className="label" htmlFor="nameTheme">
          Nom du thème
          <TbAsterisk />:
        </label>

        <input
          type="text"
          id="nameTheme"
          value={nameTheme}
          onChange={(e) => setNameTheme(e.target.value)}
          required
        />
        <br />
        <div className="texteArea">
          <label className="label" htmlFor="descriptionTheme">
            Description du thème:
          </label>
          <textarea
            className="descriptionThemeArea"
            id="descriptionTheme"
            value={descriptionTheme}
            onChange={(e) => setDescriptionTheme(e.target.value)}
          ></textarea>
        </div>
        <br />
        <div className="image">
          <label className="label" htmlFor="pictureTheme">
            Ajouter une image:
          </label>
          <input
            type="file"
            id="pictureTheme"
            accept="image/*"
            onChange={handleFileChange}
          />
          {pictureTheme && (
            <img
              className="photoTheme"
              src={URL.createObjectURL(pictureTheme)}
              alt="Aperçu de l'image"
            />
          )}
        </div>
        <br />

        <label className="label" htmlFor="archiveTheme">
          Archiver le thème
          <TbAsterisk />:
        </label>
        <select
          id="archiveTheme"
          value={archiveTheme}
          onChange={(e) => setArchiveTheme(Number(e.target.value))}
          required
        >
          <option value={0}>Non</option>
          <option value={1}>Oui</option>
        </select>
        <br />

        <button className="buttonCart" type="submit">
          {submitSuccess ? "Ajouté!" : "Ajouter le thème"}
        </button>
        <div>
          <p>
            {" "}
            <TbAsterisk /> champs obligatoire{" "}
          </p>
        </div>
      </form>
      <div className="cadreBas">
        <img src={CadreBG} className="cadreBG" alt="Cadre bas gauche" />
        <img src={CadreBD} className="cadreBD" alt="Cadre bas gauche" />
      </div>
    </div>
  )
}

export default AddTheme
