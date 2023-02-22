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
                <input type="checkbox" />
                Potter
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" />
                Lovecraft
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" />
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
                <input type="checkbox" />
                Bijoux
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" />
                Sculptures
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" />
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
                <input type="checkbox" />
                Jusqu'à 50 €
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" />
                50 € à 100 €
              </label>
            </div>
            <div>
              <label className="labelInputFilter">
                <input type="checkbox" />
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
    </div>
  )
}
