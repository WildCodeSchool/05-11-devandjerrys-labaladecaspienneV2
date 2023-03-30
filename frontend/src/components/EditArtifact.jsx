/* eslint-disable camelcase */
import React, { useState, useEffect } from "react"
import axios from "axios"
import CadreHG from "../assets/coinHG.svg"
import CadreHD from "../assets/coinHD.svg"
import CadreBG from "../assets/coinBG.svg"
import CadreBD from "../assets/coinBD.svg"

const EditArtifact = () => {
  const [artifacts, setArtifacts] = useState([])
  const [selectedArtifact, setSelectedArtifact] = useState(null)
  const [name_arti, setNameArti] = useState("")
  const [description_arti, setDescriptionArti] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [matiere_arti, setMatiereArti] = useState("")
  const [archive_arti, setArchiveArti] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // ---------------- TEST CECILIA ------------------
  const [images, setImages] = useState([])
  // const [themes, setThemes] = useState("")

  const handleDeleteImage = (imageToDelete) => {
    setImages(images.filter((image) => image !== imageToDelete))
  }
  // ------------------------------------------------

  const handleArtifactSelection = (artifact) => {
    setSelectedArtifact(artifact)
    setNameArti(artifact.name_arti)
    setDescriptionArti(artifact.description_arti)
    setPrice(artifact.price)
    setStock(artifact.stock)
    setDiscount(artifact.discount)
    setMatiereArti(artifact.matiere_arti)
    setArchiveArti(artifact.archive_arti)
    setSubmitSuccess(false)
    setImages(artifact.images || []) // Test Cecilia
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedArtifact) {
      const formData = {
        name_arti,
        description_arti,
        price,
        stock,
        discount,
        matiere_arti,
        archive_arti,
      }

      try {
        await axios.put(
          `http://localhost:5000/artifacts/${selectedArtifact.id}`,
          formData
        )

        // Mettre à jour les artefacts localement
        setArtifacts(
          artifacts.map((artifact) =>
            artifact.id === selectedArtifact.id
              ? {
                  ...artifact,
                  name_arti,
                  description_arti,
                  price,
                  stock,
                  discount,
                  matiere_arti,
                  archive_arti,
                }
              : artifact
          )
        )
        setSubmitSuccess(true)
      } catch (error) {
        console.error("Erreur lors de la modification de l'artefact:", error)
      }
    }
  }

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/artifacts")
        setArtifacts(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des artefacts:", error)
      }
    }

    fetchArtifacts()
  }, [])

  return (
    <div className="editArtifact">
      <h2>Modifier un artefact</h2>
      <div className="cadreHaut">
        <img src={CadreHG} className="cadreHG" alt="Cadre haut gauche" />
        <img src={CadreHD} className="cadreHD" alt="Cadre haut droit" />
      </div>
      <form className="interieurCadre">
        <label className="label" htmlFor="artifact-selection">
          Sélectionner un artefact:
        </label>
        <select
          id="artifact-selection"
          value={selectedArtifact?.id || ""}
          onChange={(e) => {
            const artifact = artifacts.find(
              (artifact) => artifact.id === Number(e.target.value)
            )
            if (artifact) {
              handleArtifactSelection(artifact)
            }
          }}
        >
          <option value="">Choisir un artefact</option>
          {artifacts.map((artifact) => (
            <option key={artifact.id} value={artifact.id}>
              {artifact.name_arti}
            </option>
          ))}
        </select>
        {selectedArtifact && (
          <form className="interieurCadreSecond" onSubmit={handleSubmit}>
            <label className="label" htmlFor="nameArti">
              Nom de l'artéfact:
            </label>
            <input
              type="text"
              id="nameArti"
              value={name_arti}
              onChange={(e) => setNameArti(e.target.value)}
            />
            <br />
            <div className="descript">
              <label className="label" htmlFor="descriptionArti">
                Description de l'artéfact:
              </label>
              <textarea
                className="descriptionThemeArea"
                id="descriptionArti"
                value={description_arti}
                onChange={(e) => setDescriptionArti(e.target.value)}
              ></textarea>
              <br />
              <label className="label" htmlFor="matiereArti">
                Matières utilisées:
              </label>
              <textarea
                className="descriptionThemeArea"
                id="matiereArti"
                value={matiere_arti}
                onChange={(e) => setMatiereArti(e.target.value)}
              ></textarea>
            </div>
            <br />
            <label className="label" htmlFor="price">
              Prix TTC (en €)
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label className="label" htmlFor="stock">
              Stock:
            </label>
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <br />
            <label className="label" htmlFor="discount">
              Réduction (en %):
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
            <label className="label" htmlFor="archiveArti">
              Archiver l'artéfact:
            </label>
            <select
              id="archiveArti"
              value={archive_arti}
              onChange={(e) => setArchiveArti(Number(e.target.value))}
            >
              <option value={0}>Non</option>
              <option value={1}>Oui</option>
            </select>
            <br /> <br />
            <div>
              ------------------------- TEST CECILIA -------------------------
            </div>
            <h3>Supprimer des images</h3>
            <div className="changeArti">
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                  <button onClick={() => handleDeleteImage(image)}>
                    Supprimer l'image
                  </button>
                </div>
              ))}
            </div>
            <h3>Ajouter des images</h3>
            <p>à faire</p>
            <h3>Supprimer les thèmes de l'artéfact</h3>
            <p>à faire</p>
            <h3>Ajouter des thèmes de l'artéfact</h3>
            <p>à faire</p>
            <div>
              ------------------------------------------------------------
            </div>
            <button className="buttonCart" type="submit">
              {submitSuccess ? "Modifié!" : "Modifier l'artifact"}
            </button>
          </form>
        )}
      </form>
      <div className="cadreBas">
        <img src={CadreBG} className="cadreBG" alt="Cadre bas gauche" />
        <img src={CadreBD} className="cadreBD" alt="Cadre bas gauche" />
      </div>
    </div>
  )
}

export default EditArtifact
