/* eslint-disable camelcase */
import React, { useState, useEffect } from "react"
import axios from "axios"

const EditTheme = () => {
  const [themes, setThemes] = useState([])
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [name_theme, setNameTheme] = useState("")
  const [description_theme, setDescriptionTheme] = useState("")
  const [picture_theme, setPictureTheme] = useState(null)
  const [archive_theme, setArchiveTheme] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/themes")
        setThemes(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des thèmes:", error)
      }
    }

    fetchThemes()
  }, [])
  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme)

    setNameTheme(theme.name_theme)
    setDescriptionTheme(theme.description_theme)
    setPictureTheme(theme.picture_theme)
    setImageUrl(import.meta.env.VITE_BACKEND_URL + theme.picture_theme)
    setArchiveTheme(theme.archive_theme)
    setSubmitSuccess(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedTheme) {
      const formData = new FormData()
      formData.append("name_theme", name_theme)
      formData.append("description_theme", description_theme)
      if (picture_theme instanceof File) {
        formData.append("picture_theme", picture_theme)
      } else {
        formData.append("existing_picture_theme", picture_theme)
      }
      formData.append("archive_theme", archive_theme)
      try {
        await axios.put(
          `http://localhost:5000/themes/${selectedTheme.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        // Mettre à jour les thèmes localement
        setThemes(
          themes.map((theme) =>
            theme.id === selectedTheme.id
              ? {
                  ...theme,
                  name_theme,
                  description_theme,
                  picture_theme,
                  archive_theme,
                }
              : theme
          )
        )
        setSubmitSuccess(true)
      } catch (error) {
        console.error("Erreur lors de la modification du thème:", error)
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureTheme(e.target.files[0])
      setImageUrl(URL.createObjectURL(e.target.files[0]))
    } else {
      setPictureTheme(null)
    }
  }

  return (
    <div>
      <h2>Modifier un thème</h2>
      <label htmlFor="theme-selection">Sélectionner un thème:</label>
      <select
        id="theme-selection"
        value={selectedTheme?.id || ""}
        onChange={(e) => {
          const theme = themes.find(
            (theme) => theme.id === Number(e.target.value)
          )
          if (theme) {
            handleThemeSelection(theme)
          }
        }}
      >
        <option value="">Choisir un thème</option>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name_theme}
          </option>
        ))}
      </select>

      {selectedTheme && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name_theme">Nom du thème:</label>
          <input
            type="text"
            id="name_theme"
            value={name_theme}
            onChange={(e) => setNameTheme(e.target.value)}
          />
          <br />

          <label htmlFor="description_theme">Description du thème:</label>
          <textarea
            id="description_theme"
            value={description_theme}
            onChange={(e) => setDescriptionTheme(e.target.value)}
          ></textarea>
          <br />

          <label htmlFor="picture_theme">Image:</label>
          {imageUrl && <img src={imageUrl} alt="Aperçu" width="150" />}
          <input
            type="file"
            id="picture_theme"
            accept="image/*"
            onChange={handleFileChange}
          />
          <input
            type="hidden"
            id="existing_picture_theme"
            value={picture_theme}
          />
          <br />

          <label htmlFor="archive_theme">Archiver le thème:</label>
          <select
            id="archive_theme"
            value={archive_theme}
            onChange={(e) => setArchiveTheme(Number(e.target.value))}
          >
            <option value={0}>Non</option>
            <option value={1}>Oui</option>
          </select>
          <br />

          <button className="buttonCart" type="submit">
            {submitSuccess ? "Modifié!" : "Modifier le thème"}
          </button>
        </form>
      )}
    </div>
  )
}

export default EditTheme
