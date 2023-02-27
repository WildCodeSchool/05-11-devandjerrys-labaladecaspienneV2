import Header from "../components/Header"
import Footer from "../components/Footer"
import Burger from "@components/Burger"
import LineTop from "../assets/Images/head_line.png"
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai"
import { useState } from "react"

export default function Artifacts() {
  const [showThemeListFilter, setShowThemeListFilter] = useState(false)
  const [showCatListFilter, setShowCatListFilter] = useState(false)
  const [showPriceListFilter, setShowPriceListFilter] = useState(false)

  const handleThemeFilterClick = () => {
    setShowThemeListFilter(!showThemeListFilter)
  }
  const handleCatFilterClick = () => {
    setShowCatListFilter(!showCatListFilter)
  }
  const handlePriceFilterClick = () => {
    setShowPriceListFilter(!showPriceListFilter)
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
        {/* DIV FILTERS */}
        <div className="divFiltersEshop">
          <p className="titleFilters">Tous les artéfacts</p>
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
                <input type="checkbox" className="checkboxStyleEshop" />
                Potter
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" className="checkboxStyleEshop" />
                Lovecraft
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" className="checkboxStyleEshop" />
                Manga
              </label>
            </div>
          </div>
          {/* par catégories */}
          <p className="itemsFilter" onClick={handleCatFilterClick}>
            {showCatListFilter ? <AiFillCaretDown /> : <AiFillCaretRight />}
            Par catégories
          </p>
          <div
            id="catListFilter"
            style={{ display: showCatListFilter ? "block" : "none" }}
          >
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" className="checkboxStyleEshop" />
                Bijoux
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" className="checkboxStyleEshop" />
                Sculptures
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" className="checkboxStyleEshop" />
                Boites
              </label>
            </div>
          </div>
          {/* par prix */}
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
        {/* DIV ARTEFACTS */}
        <div className="divArtifactsEshop">
          <p>Image</p>
          <p>Image</p>
          <p>Image</p>
        </div>
      </div>
      <Burger />
      <Footer />
    </div>
  )
}
