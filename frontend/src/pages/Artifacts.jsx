import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "@components/Burger"
import LineTop from "../assets/Images/head_line.png"
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai"
import { RiFilter3Line } from "react-icons/ri"
import { useState, useEffect } from "react"
import axios from "axios"
import EshopCard from "@components/EshopCard"

export default function Artifacts() {
  const [showThemeListFilter, setShowThemeListFilter] = useState(false)
  const [filteredValue, setFilteredValue] = useState("")
  const [showAllFilters, setShowAllFilters] = useState(false)
  // const [selectedThemes, setSelectedThemes] = useState([]) // nouveau state pour les thèmes sélectionnés
  const handleThemeFilterClick = () => {
    setShowThemeListFilter(!showThemeListFilter)
  }

  const [artiSelect, setArtiSelect] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/artifacts")
      .then((res) => setArtiSelect(res.data))
  }, [])

  const [themeSelect, setThemeSelect] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/themes")
      .then((res) => setThemeSelect(res.data))
  }, [])

  const handleFilterChange = (e) => {
    setFilteredValue(e.target.value)
  }

  const handleAllFiltersClick = () => {
    setShowAllFilters(!showAllFilters)
  }

  // const handleThemeCheckboxChange = (e) => {
  //   // nouvelle fonction pour gérer les cases à cocher
  //   const { name, checked } = e.target
  //   if (checked) {
  //     setSelectedThemes((prevSelectedThemes) => [...prevSelectedThemes, name])
  //   } else {
  //     setSelectedThemes((prevSelectedThemes) =>
  //       prevSelectedThemes.filter((theme) => theme !== name)
  //     )
  //   }
  // }

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
        {/* ********** DIV ARTEFACTS ********** */}
        <div className="divArtifactsEshop">
          {filteredValue === ""
            ? artiSelect.map((arti) => (
                <EshopCard
                  key={arti.id}
                  images={arti.images}
                  name_arti={arti.name_arti}
                  price={arti.price}
                />
              ))
            : artiSelect
                .filter((arti) => arti.themesAll.includes(filteredValue))
                .map((arti) => (
                  <EshopCard
                    key={arti.id}
                    images={arti.images}
                    name_arti={arti.name_arti}
                    price={arti.price}
                  />
                ))}
        </div>
        <div className="divAllFilters">
          <div className="divTitleFilters" onClick={handleAllFiltersClick}>
            <p className="titleFilters">
              <RiFilter3Line />
              Filter les artéfacts
            </p>
          </div>
          {/* ********** DIV FILTERS ********** */}
          <div
            className="divFiltersEshop"
            style={{ display: showAllFilters ? "block" : "none" }}
          >
            <p className="titleFilters">Tous les artéfacts</p>
            par thèmes
            <p className="itemsFilter" onClick={handleThemeFilterClick}>
              {showThemeListFilter ? <AiFillCaretDown /> : <AiFillCaretRight />}
              Par thèmes
            </p>
            <div
              id="themeListFilter"
              style={{ display: showThemeListFilter ? "block" : "none" }}
            >
              <div>
                <label className="labelInputFilter">
                  {themeSelect.map((theme) => (
                    <div key={theme.id}>
                      <input
                        type="checkbox"
                        className="checkboxStyleEshop"
                        name={`theme_${theme.id}`}
                        id={`theme_${theme.id}`}
                        onChange={handleFilterChange}
                        value={theme.name_theme}
                      />
                      <label htmlFor={`theme_${theme.id}`}>
                        {theme.name_theme}
                      </label>
                    </div>
                  ))}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
