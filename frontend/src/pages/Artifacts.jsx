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
  const [showPriceListFilter, setShowPriceListFilter] = useState(false)
  const [showAllFilters, setShowAllFilters] = useState(false)
  const [artiSelect, setArtiSelect] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/artifacts")
      .then((res) => setArtiSelect(res.data))
  }, [])

  const handleThemeFilterClick = () => {
    setShowThemeListFilter(!showThemeListFilter)
  }
  const handlePriceFilterClick = () => {
    setShowPriceListFilter(!showPriceListFilter)
  }
  const handleAllFiltersClick = () => {
    setShowAllFilters(!showAllFilters)
  }

  // const categories choice
  const handleCheckboxChange = (e) => {}

  // fin const potter choice

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
          {artiSelect.map((arti) => (
            <EshopCard
              key={arti.id}
              images={arti.images}
              name_arti={arti.name_arti}
              price={arti.price}
              id={arti.id}
            />
          ))}
        </div>
        {/* ********** DIV FILTERS ********** */}
        <div className="divAllFilters">
          <div className="divTitleFilters" onClick={handleAllFiltersClick}>
            <div className="titleFilters">
              <RiFilter3Line />
              Filter les artéfacts
            </div>
          </div>
          <div
            className="divFiltersEshop"
            style={{ display: showAllFilters ? "block" : "none" }}
          >
            {/* <p className="titleFilters">Tous les artéfacts</p> */}
            {/* par thèmes */}
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
                  <input
                    type="checkbox"
                    className="checkboxStyleEshop"
                    onChange={handleCheckboxChange}
                  />
                  Science fiction
                </label>
              </div>
              <div>
                <label className="labelInputFilter">
                  <input type="checkbox" className="checkboxStyleEshop" />
                  Créatures imaginaires
                </label>
              </div>
              <div>
                <label className="labelInputFilter">
                  <input type="checkbox" className="checkboxStyleEshop" />
                  Fantastique
                </label>
              </div>
            </div>
            {/* ***** par prix ***** */}
            <p className="itemsFilter" onClick={handlePriceFilterClick}>
              {showPriceListFilter ? <AiFillCaretDown /> : <AiFillCaretRight />}
              Par prix
            </p>
            <div
              id="priceListFilter"
              style={{ display: showPriceListFilter ? "block" : "none" }}
            >
              <div>
                <label className="labelInputFilter">
                  <input type="checkbox" className="checkboxStyleEshop" />
                  Jusqu'à 50 €
                </label>
              </div>
              <div>
                <label className="labelInputFilter">
                  <input type="checkbox" className="checkboxStyleEshop" />
                  50 € à 100 €
                </label>
              </div>
              <div>
                <label className="labelInputFilter">
                  <input type="checkbox" className="checkboxStyleEshop" />
                  100 € et plus
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ********** DIV FILTERS Mobil ********** */}
      <div className="divFlexFiltersMobil">
        <div className="divButtonFilter" onClick={handleAllFiltersClick}>
          <RiFilter3Line />
          Filtrer
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
