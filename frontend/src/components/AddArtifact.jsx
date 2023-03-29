/* eslint-disable camelcase */
import { TbAsterisk } from "react-icons/tb"
import React, { useState, useRef } from "react"
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
  const [pictureFile2, setPictureFile2] = useState(null)
  const [pictureFile3, setPictureFile3] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const fileInput1 = useRef(null)
  const fileInput2 = useRef(null)
  const fileInput3 = useRef(null)

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
          required
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
          required
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
          required
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
          required
        >
          <option value={0}>Non</option>
          <option value={1}>Oui</option>
        </select>
        <br />
        <label htmlFor="artifact_image">Image n°1:</label>
        <input
          ref={fileInput1}
          type="file"
          id="artifact_image"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 1)}
        />
        <br />
        <label htmlFor="artifact_image2">Image n°2:</label>
        <input
          ref={fileInput2}
          type="file"
          id="artifact_image2"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 2)}
        />
        <br />
        <label htmlFor="artifact_image3">Image n°3:</label>
        <input
          ref={fileInput3}
          type="file"
          id="artifact_image3"
          accept="image/*"
          onChange={(e) => handleFileChange(e, 3)}
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
