import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "@components/Burger"
import LineTop from "../assets/Images/head_line.png"
import { useState, useEffect } from "react"
import axios from "axios"
import EshopCard from "@components/EshopCard"

export default function Artifacts() {
  const [artiSelect, setArtiSelect] = useState([])
  const [filteredValue, setFilteredValue] = useState("")
  const [themeSelect, setThemeSelect] = useState([])
  const handleCardClick = (arti) => {
    console.info("Id de l'objet cliqué :", arti.id)
  }
  const [, setCounter] = useState(0)
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/artifacts").then((res) => {
      const artifactsWithId = res.data.map((artifact) => {
        return {
          ...artifact,
          id: artifact.id,
        }
      })
      setArtiSelect(artifactsWithId)
    })
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:5000/themes")
      .then((res) => setThemeSelect(res.data))
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:5000/comments")
      .then((res) => setComments(res.data))
  }, [])
  console.log(comments)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleFilterChange = (e) => {
    setFilteredValue(e.target.value)
  }

  return (
    <div className="Artifacts">
      <Header />
      <div className="divHeadEshop">
        <div>
          <p className="titleHeadEshop">LA BALADE CASPIENNE</p>
        </div>
        <div>
          <img className="lineTitleEshop" src={LineTop} alt="image" />
        </div>
      </div>
      <div className="mainDivEshop">
        {/* ********** DIV FILTERS ********** */}
        <div className="divAllFilters">
          <div id="themeListFilter">
            <label className="labelSelect" htmlFor="themeSelect">
              Filtrer par thèmes
            </label>
            <select
              className="selectStyle"
              id="themeSelect"
              onChange={handleFilterChange}
            >
              <option value="">Tous les thèmes</option>
              {themeSelect.map((theme) => (
                <option key={theme.id} value={theme.name_theme}>
                  {theme.name_theme}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* ********** DIV ARTEFACTS ********** */}

        <div className="divArtifactsEshop">
          {filteredValue === ""
            ? artiSelect.map((arti) => (
                <EshopCard
                  key={arti.id}
                  id={arti.id}
                  images={arti.images}
                  name_arti={arti.name_arti}
                  price={arti.price}
                  onClick={() => handleCardClick(arti)}
                />
              ))
            : artiSelect.filter((arti) =>
                arti.themesAll.includes(filteredValue)
              ).length > 0
            ? artiSelect
                .filter((arti) => arti.themesAll.includes(filteredValue))
                .map((arti) => (
                  <EshopCard
                    key={arti.id}
                    id={arti.id}
                    images={arti.images}
                    name_arti={arti.name_arti}
                    price={arti.price}
                  />
                ))
            : filteredValue !== "" && (
                <p className="articleNone">
                  Aucun article dans cette catégorie.
                </p>
              )}
        </div>
      </div>
      <div className="comments">
        <h1 className="titlecomm">Comments</h1>
        {comments.map((comment) => (
          // eslint-disable-next-line react/jsx-key
          <>
            <p>{comment.content}</p>
            <p>{comment.date_create}</p>
            <p>{comment.date_update}</p>
          </>
        ))}
      </div>

      <Burger />
      <Footer />
    </div>
  )
}
