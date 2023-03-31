// /* eslint-disable camelcase */
// import React, { useState, useEffect } from "react"
// import axios from "axios"

// const EditArtifact = () => {
//   const [artifacts, setArtifacts] = useState([])
//   const [selectedArtifact, setSelectedArtifact] = useState(null)
//   const [name_arti, setNameArti] = useState("")
//   const [description_arti, setDescriptionArti] = useState("")
//   const [price, setPrice] = useState(0)
//   const [stock, setStock] = useState(0)
//   const [discount, setDiscount] = useState(0)
//   const [matiere_arti, setMatiereArti] = useState("")
//   const [archive_arti, setArchiveArti] = useState(0)
//   const [submitSuccess, setSubmitSuccess] = useState(false)

//   // ---------------- TEST CECILIA ------------------
//   const [images, setImages] = useState([])
//   // const [artifacts, setArtifacts] = useState("")

//   const handleDeleteImage = (imageToDelete) => {
//     setImages(images.filter((image) => image !== imageToDelete))
//   }
//   // ------------------------------------------------

//   const handleArtifactSelection = (artifact) => {
//     setSelectedArtifact(artifact)
//     setNameArti(artifact.name_arti)
//     setDescriptionArti(artifact.description_arti)
//     setPrice(artifact.price)
//     setStock(artifact.stock)
//     setDiscount(artifact.discount)
//     setMatiereArti(artifact.matiere_arti)
//     setArchiveArti(artifact.archive_arti)
//     setSubmitSuccess(false)
//     setImages(artifact.images || []) // Test Cecilia
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (selectedArtifact) {
//       const formData = {
//         name_arti,
//         description_arti,
//         price,
//         stock,
//         discount,
//         matiere_arti,
//         archive_arti,
//       }

//       try {
//         await axios.put(
//           `http://localhost:5000/artifacts/${selectedArtifact.id}`,
//           formData
//         )

//         // Mettre à jour les artefacts localement
//         setArtifacts(
//           artifacts.map((artifact) =>
//             artifact.id === selectedArtifact.id
//               ? {
//                   ...artifact,
//                   name_arti,
//                   description_arti,
//                   price,
//                   stock,
//                   discount,
//                   matiere_arti,
//                   archive_arti,
//                 }
//               : artifact
//           )
//         )
//         setSubmitSuccess(true)
//       } catch (error) {
//         console.error("Erreur lors de la modification de l'artefact:", error)
//       }
//     }
//   }

//   useEffect(() => {
//     const fetchArtifacts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/artifacts")
//         setArtifacts(response.data)
//       } catch (error) {
//         console.error("Erreur lors de la récupération des artefacts:", error)
//       }
//     }

//     fetchArtifacts()
//   }, [])

//   return (
//     <div>
//       <h2>Modifier un artefact</h2>
//       <label htmlFor="artifact-selection">Sélectionner un artefact:</label>
//       <select
//         id="artifact-selection"
//         value={selectedArtifact?.id || ""}
//         onChange={(e) => {
//           const artifact = artifacts.find(
//             (artifact) => artifact.id === Number(e.target.value)
//           )
//           if (artifact) {
//             handleArtifactSelection(artifact)
//           }
//         }}
//       >
//         <option value="">Choisir un artefact</option>
//         {artifacts.map((artifact) => (
//           <option key={artifact.id} value={artifact.id}>
//             {artifact.name_arti}
//           </option>
//         ))}
//       </select>
//       {selectedArtifact && (
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="nameArti">Nom de l'artéfact:</label>
//           <input
//             type="text"
//             id="nameArti"
//             value={name_arti}
//             onChange={(e) => setNameArti(e.target.value)}
//           />
//           <br />
//           <label htmlFor="descriptionArti">Description de l'artéfact:</label>
//           <textarea
//             id="descriptionArti"
//             value={description_arti}
//             onChange={(e) => setDescriptionArti(e.target.value)}
//           ></textarea>
//           <br />
//           <label htmlFor="matiereArti">Matières utilisées:</label>
//           <textarea
//             id="matiereArti"
//             value={matiere_arti}
//             onChange={(e) => setMatiereArti(e.target.value)}
//           ></textarea>
//           <br />
//           <label htmlFor="price">Prix TTC (en €)</label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//           <br />
//           <label htmlFor="stock">Stock:</label>
//           <input
//             type="number"
//             id="stock"
//             value={stock}
//             onChange={(e) => setStock(e.target.value)}
//           />
//           <br />
//           <label htmlFor="discount">Réduction (en %):</label>
//           <input
//             type="number"
//             id="discount"
//             min="0"
//             max="100"
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//           <br />
//           <label htmlFor="archiveArti">Archiver l'artéfact:</label>
//           <select
//             id="archiveArti"
//             value={archive_arti}
//             onChange={(e) => setArchiveArti(Number(e.target.value))}
//           >
//             <option value={0}>Non</option>
//             <option value={1}>Oui</option>
//           </select>
//           <br /> <br />
//           <div>
//             ------------------------- TEST CECILIA -------------------------
//           </div>
//           <h3>Supprimer des images</h3>
//           <div className="changeArti">
//             {images.map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={`Image ${index + 1}`} />
//                 <button onClick={() => handleDeleteImage(image)}>
//                   Supprimer l'image
//                 </button>
//               </div>
//             ))}
//           </div>
//           <h3>Ajouter des images</h3>
//           <p>à faire</p>
//           <h3>Supprimer les thèmes de l'artéfact</h3>
//           <p>à faire</p>
//           <h3>Ajouter des thèmes de l'artéfact</h3>
//           <p>à faire</p>
//           <div>
//             ------------------------------------------------------------
//           </div>
//           <button className="buttonCart" type="submit">
//             {submitSuccess ? "Modifié!" : "Modifier l'artifact"}
//           </button>
//         </form>
//       )}
//     </div>
//   )
// }

// export default EditArtifact
/* eslint-disable camelcase */
import React, { useState, useEffect } from "react"
import axios from "axios"
import CadreHG from "../assets/coinHG.svg"
import CadreHD from "../assets/coinHD.svg"
import CadreBG from "../assets/coinBG.svg"
import CadreBD from "../assets/coinBD.svg"

const EditArtifact = () => {
  const [artifacts, setArtifacts] = useState([])
  const [selectedArtifacts, setSelectedArtifacts] = useState(null)
  const [name_arti, setNameArtifact] = useState("")
  const [description_arti, setDescriptionArtifact] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [discount, setDiscount] = useState("")
  const [matiere_arti, setMatiereArti] = useState("")
  const [themesAll, setThemesAll] = useState("")
  const [images, setPictureArtifact] = useState(null)
  const [archive_arti, setArchiveArtifact] = useState(0)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/artifacts")
        setArtifacts(response.data)
      } catch (error) {
        console.error("Erreur lors de la récupération des artéfacts:", error)
      }
    }

    fetchArtifacts()
  }, [])
  const handleArtifactselection = (artifact) => {
    setSelectedArtifacts(artifact)
    setNameArtifact(artifact.name_arti)
    setDescriptionArtifact(artifact.description_arti)
    setPrice(artifact.price)
    setStock(artifact.stock)
    setDiscount(artifact.discount)
    setMatiereArti(artifact.matiere_arti)
    setThemesAll(artifact.themesAll)
    setPictureArtifact(artifact.images)
    setImageUrl(import.meta.env.VITE_BACKEND_URL + artifact.images)
    setArchiveArtifact(artifact.archive_arti)
    setSubmitSuccess(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (selectedArtifacts) {
      const formData = new FormData()
      formData.append("name_arti", name_arti)
      formData.append("description_arti", description_arti)
      formData.append("archive_arti", archive_arti)
      formData.append("matiere_arti", matiere_arti)
      formData.append("price", price)
      formData.append("stock", stock)
      formData.append("discount", discount)
      formData.append("themesAll", themesAll)

      // Récupérer l'ID de l'image stockée "
      const pictureId = setPictureArtifact.id
      const response = await axios.get(
        `http://localhost:5000/pictures/${pictureId}`
      )
      const artifact = response.data
      const imageId = artifact.images

      // Mettre à jour l'image dans la table "pictures"
      if (images instanceof File) {
        formData.append("images", images)
        await axios.post(
          `http://localhost:5000/pictures/${imageId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
      }

      try {
        // Mettre à jour l'enregistrement dans la table "artifacts"

        await axios.post(
          // eslint-disable-next-line no-undef
          `http://localhost:5000/pictures/${artifactId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        // Mettre à jour les artéfacts localement
        setArtifacts(
          artifacts.map((Artifact) =>
            Artifact.id === selectedArtifacts.id
              ? {
                  ...Artifact,
                  name_arti,
                  description_arti,
                  archive_arti,
                  matiere_arti,
                  price,
                  stock,
                  discount,
                  themesAll,
                }
              : Artifact
          )
        )
        setSubmitSuccess(true)
      } catch (error) {
        console.error("Erreur lors de la modification de l'artéfact:", error)
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 1) {
      setPictureArtifact(e.target.files[0])
      setImageUrl(URL.createObjectURL(e.target.files[0]))
    } else {
      setPictureArtifact(null)
    }
  }

  const handleDeleteImage = () => {
    setImageUrl("")
    setPictureArtifact("")
  }

  return (
    <div className="editArtifact">
      <h2>Modifier un artéfact</h2>
      <div className="cadreHaut">
        <img src={CadreHG} className="cadreHG" alt="Cadre haut gauche" />
        <img src={CadreHD} className="cadreHD" alt="Cadre haut droit" />
      </div>
      <form className="interieurCadre">
        <label htmlFor="Artifact-selection">Sélectionner un artéfact:</label>
        <select
          id="Artifact-selection"
          value={selectedArtifacts?.id || ""}
          onChange={(e) => {
            const Artifact = artifacts.find(
              (Artifact) => Artifact.id === Number(e.target.value)
            )
            if (Artifact) {
              handleArtifactselection(Artifact)
            }
          }}
        >
          <option value="">Choisir un artéfact</option>
          {artifacts.map((Artifact) => (
            <option key={Artifact.id} value={Artifact.id}>
              {Artifact.name_arti}
            </option>
          ))}
        </select>

        {selectedArtifacts && (
          <form onSubmit={handleSubmit} className="interieurCadreSecond">
            <label className="label" htmlFor="name_arti">
              Nom de l'artéfact:
            </label>
            <input
              type="text"
              id="name_arti"
              value={name_arti}
              onChange={(e) => setNameArtifact(e.target.value)}
            />
            <br />

            <label className="label" htmlFor="description_arti">
              Description de l'artéfact:
            </label>
            <textarea
              id="description_arti"
              value={description_arti}
              onChange={(e) => setDescriptionArtifact(e.target.value)}
            ></textarea>
            <br />

            <label className="label" htmlFor="images">
              Images:{" "}
            </label>
            <div>
              {imageUrl && (
                <div>
                  <img src={imageUrl} alt="Aperçu" width="150" />
                  <button type="button" onClick={handleDeleteImage}>
                    Supprimer
                  </button>
                </div>
              )}
              {/* <label className="label" htmlFor="images"></label> */}
              <input
                type="file"
                id="images"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <input
              type="file"
              id="images"
              accept="image/*"
              onChange={handleFileChange}
            />

            <input type="hidden" id="existing_images" value={images} />
            <br />

            <label className="label" htmlFor="archive_arti">
              Archiver l'artéfact:
            </label>
            <select
              id="archive_arti"
              value={archive_arti}
              onChange={(e) => setArchiveArtifact(Number(e.target.value))}
            >
              <option value={0}>Non</option>
              <option value={1}>Oui</option>
            </select>
            <br />

            <button className="buttonCart" type="submit">
              {submitSuccess ? "Modifié!" : "Modifier l'artéfact"}
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
