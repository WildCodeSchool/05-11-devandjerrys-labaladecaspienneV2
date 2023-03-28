import { TbAsterisk } from "react-icons/tb"
import React, { useState } from "react"
import axios from "axios"

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
    <div>
      <h2>Ajouter un thème</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameTheme">
          Nom du thème
          <TbAsterisk />:
        </label>

        <input
          type="text"
          id="nameTheme"
          value={nameTheme}
          onChange={(e) => setNameTheme(e.target.value)}
        />
        <br />

        <label htmlFor="descriptionTheme">Description du thème:</label>
        <textarea
          id="descriptionTheme"
          value={descriptionTheme}
          onChange={(e) => setDescriptionTheme(e.target.value)}
        ></textarea>
        <br />

        <label htmlFor="pictureTheme">Ajouter une image:</label>
        <input
          type="file"
          id="pictureTheme"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br />

        <label htmlFor="archiveTheme">
          Archiver le thème
          <TbAsterisk />:
        </label>
        <select
          id="archiveTheme"
          value={archiveTheme}
          onChange={(e) => setArchiveTheme(Number(e.target.value))}
        >
          <option value={0}>Non</option>
          <option value={1}>Oui</option>
        </select>
        <br />

        <button className="buttonCart" type="submit">
          {submitSuccess ? "Ajouté!" : "Ajouter le thème"}
        </button>
      </form>
    </div>
  )
}

export default AddTheme
