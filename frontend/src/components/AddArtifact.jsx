/* eslint-disable camelcase */
import { TbAsterisk } from "react-icons/tb"
import React, { useState } from "react"
import axios from "axios"

const AddArtifact = () => {
  const [nameArti, setNameArti] = useState("")
  const [descriptionArti, setDescriptionArti] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [matiereArti, setMatiereArti] = useState("")
  const [archiveArti, setArchiveArti] = useState(0)
  const [pictureFile, setPictureFile] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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

      // Préparer les données de l'image
      const formData = new FormData()
      formData.append("name_img", pictureFile.name)
      formData.append("url_img", pictureFile)
      formData.append("artifacts_id", artifacts_id)

      // Ajouter l'image avec l'ID de l'artefact
      await axios.post("http://localhost:5000/pictures", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      // Réinitialiser les champs du formulaire
      setNameArti("")
      setDescriptionArti("")
      setPrice(0)
      setStock(0)
      setDiscount(0)
      setMatiereArti("")
      setArchiveArti(0)
      setPictureFile(null)
      setSubmitSuccess(true)
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout de l'artefact et de l'image:",
        error
      )
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureFile(e.target.files[0])
    } else {
      setPictureFile(null)
    }
  }

  return (
    <div>
      <h2>Ajouter un artéfact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameArti">
          Nom du thème
          <TbAsterisk />:
        </label>

        <input
          type="text"
          id="nameArti"
          value={nameArti}
          onChange={(e) => setNameArti(e.target.value)}
        />
        <br />

        <label htmlFor="descriptionArti">Description de l'artéfact:</label>
        <textarea
          id="descriptionArti"
          value={descriptionArti}
          onChange={(e) => setDescriptionArti(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="matiereArti">Matières utilisées:</label>
        <textarea
          id="matiereArti"
          value={matiereArti}
          onChange={(e) => setMatiereArti(e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="price">
          Prix TTC (en €)
          <TbAsterisk />:
        </label>

        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <label htmlFor="discount">
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
        />
        <br />

        <label htmlFor="archiveArti">
          Archiver l'artifact:
          <TbAsterisk />:
        </label>
        <select
          id="archiveArti"
          value={archiveArti}
          onChange={(e) => setArchiveArti(Number(e.target.value))}
        >
          <option value={0}>Non</option>
          <option value={1}>Oui</option>
        </select>
        <br />
        <label htmlFor="artifact_image">Image:</label>
        <input
          type="file"
          id="artifact_image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <br />
        <button className="buttonCart" type="submit">
          {submitSuccess ? "Ajouté!" : "Ajouter l'artifact"}
        </button>
      </form>
    </div>
  )
}

export default AddArtifact
