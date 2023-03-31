/* eslint-disable camelcase */
import { TbAsterisk } from "react-icons/tb"
import React, { useState, useRef, useEffect } from "react"
import axios from "axios"
import CadreHG from "../assets/coinHG.svg"
import CadreHD from "../assets/coinHD.svg"
import CadreBG from "../assets/coinBG.svg"
import CadreBD from "../assets/coinBD.svg"

const AddArtifact = () => {
  const [nameArti, setNameArti] = useState("")
  const [descriptionArti, setDescriptionArti] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [matiereArti, setMatiereArti] = useState("")
  const [archiveArti, setArchiveArti] = useState(0)
  const [pictureFile, setPictureFile] = useState(null)
  const [pictureFile2, setPictureFile2] = useState(null)
  const [pictureFile3, setPictureFile3] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const fileInput1 = useRef(null)
  const fileInput2 = useRef(null)
  const fileInput3 = useRef(null)

  const [themes, setThemes] = useState([])
  const [selectedThemes, setSelectedThemes] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const artifactData = {
      name_arti: nameArti,
      description_arti: descriptionArti,
      price,
      stock,
      discount,
      matiere_arti: matiereArti,
      archive_arti: archiveArti,
    }

    try {
      // Ajouter d'abord l'artefact
      const artifactResponse = await axios.post(
        "http://localhost:5000/artifacts",
        artifactData
      )

      // Récupérer l'ID de l'artefact
      const artifacts_id = artifactResponse.data.id

      const uploadImage = async (file) => {
        const formData = new FormData()
        formData.append("name_img", file.name)
        formData.append("url_img", file)
        formData.append("artifacts_id", artifacts_id)

        await axios.post("http://localhost:5000/pictures", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      }
      // Ajoutez les images avec l'ID de l'artefact (si elles existent)
      if (pictureFile) {
        await uploadImage(pictureFile)
      }
      if (pictureFile2) {
        await uploadImage(pictureFile2)
      }
      if (pictureFile3) {
        await uploadImage(pictureFile3)
      }

      for (const themeId of selectedThemes) {
        try {
          await axios.post("http://localhost:5000/hasthemes", {
            artifacts_id,
            themes_id: themeId,
          })
        } catch (error) {
          console.error(
            `Erreur lors de l'ajout du thème ${themeId} pour l'artefact ${artifacts_id}:`,
            error
          )
        }
      }

      // Réinitialiser les champs du formulaire
      setNameArti("")
      setDescriptionArti("")
      setPrice(0)
      setStock(0)
      setDiscount(0)
      setMatiereArti("")
      setArchiveArti(0)
      setPictureFile(null)
      setPictureFile2(null)
      setPictureFile3(null)
      setSubmitSuccess(true)
      if (fileInput1.current) {
        fileInput1.current.value = null
      }
      if (fileInput2.current) {
        fileInput2.current.value = null
      }
      if (fileInput3.current) {
        fileInput3.current.value = null
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout de l'artefact et de l'image:",
        error
      )
    }
  }

  const handleFileChange = (e, index) => {
    if (e.target.files.length === 1) {
      switch (index) {
        case 1:
          setPictureFile(e.target.files[0])
          break
        case 2:
          setPictureFile2(e.target.files[0])
          break
        case 3:
          setPictureFile3(e.target.files[0])
          break
      }
    } else {
      setPictureFile(null)
    }
  }

  const handleThemeChange = (e, themeId) => {
    if (e.target.checked) {
      setSelectedThemes([...selectedThemes, themeId])
    } else {
      setSelectedThemes(selectedThemes.filter((id) => id !== themeId))
    }
  }

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

  return (
    <>
      <div className="addArtifact">
        <div>
          <h2>Ajouter un artéfact</h2>
        </div>
        <div className="cadreHaut">
          <img src={CadreHG} className="cadreHG" alt="Cadre haut gauche" />
          <img src={CadreHD} className="cadreHD" alt="Cadre haut droit" />
        </div>
        <form className="interieurCadre" onSubmit={handleSubmit}>
          <label className="label" htmlFor="nameArti">
            Nom du thème
            <TbAsterisk />:
          </label>

          <input
            type="text"
            id="nameArti"
            value={nameArti}
            onChange={(e) => setNameArti(e.target.value)}
            required
          />
          <br />
          <div className="textAreaContainer">
            <label className="label" htmlFor="descriptionArti">
              Description de l'artéfact:
            </label>
            <textarea
              className="descriptionThemeArea"
              id="descriptionArti"
              value={descriptionArti}
              onChange={(e) => setDescriptionArti(e.target.value)}
            ></textarea>
            <br />
            <label className="label" htmlFor="matiereArti">
              Matières utilisées:
            </label>
            <textarea
              className="descriptionThemeArea"
              id="matiereArti"
              value={matiereArti}
              onChange={(e) => setMatiereArti(e.target.value)}
            ></textarea>
          </div>
          <br />
          <label className="label" htmlFor="price">
            Prix TTC (en €)
            <TbAsterisk />:
          </label>

          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <br />
          <label className="label" htmlFor="discount">
            Réduction (en %)
            <TbAsterisk />:
          </label>

          <input
            type="number"
            id="discount"
            min="0"
            max="100"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
          <br />

          <label className="label" htmlFor="archiveArti">
            Archiver l'artifact:
            <TbAsterisk />:
          </label>
          <select
            id="archiveArti"
            value={archiveArti}
            onChange={(e) => setArchiveArti(Number(e.target.value))}
            required
          >
            <option value={0}>Non</option>
            <option value={1}>Oui</option>
          </select>
          <br />
          <div className="image">
            <label className="label" htmlFor="artifact_image">
              Image n°1:
            </label>
            <input
              ref={fileInput1}
              type="file"
              id="artifact_image"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 1)}
            />
            {pictureFile && (
              <img
                className="photoTheme"
                src={URL.createObjectURL(pictureFile)}
                alt="Aperçu de l'image"
              />
            )}
            <br />
            <label className="label" htmlFor="artifact_image2">
              Image n°2:
            </label>
            <input
              ref={fileInput2}
              type="file"
              id="artifact_image2"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 2)}
            />
            {pictureFile2 && (
              <img
                className="photoTheme"
                src={URL.createObjectURL(pictureFile2)}
                alt="Aperçu de l'image"
              />
            )}
            <br />
            <label className="label" htmlFor="artifact_image3">
              Image n°3:
            </label>
            <input
              ref={fileInput3}
              type="file"
              id="artifact_image3"
              accept="image/*"
              onChange={(e) => handleFileChange(e, 3)}
            />
            {pictureFile3 && (
              <img
                className="photoTheme"
                src={URL.createObjectURL(pictureFile3)}
                alt="Aperçu de l'image"
              />
            )}
          </div>
          <br />
          <label htmlFor="themes">Sélectionner un ou plusieurs thèmes:</label>

          {themes.map((theme) => (
            <div key={theme.id}>
              <input
                type="checkbox"
                id="theme"
                name="theme"
                value={theme.id}
                checked={selectedThemes.includes(theme.id)}
                onChange={(e) => handleThemeChange(e, theme.id)}
              />
              <label htmlFor={`theme-${theme.id}`}>{theme.name_theme}</label>
            </div>
          ))}
          <br />

          <button className="buttonCart" type="submit">
            {submitSuccess ? "Ajouté!" : "Ajouter l'artifact"}
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
    </>
  )
}

export default AddArtifact
