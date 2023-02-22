import LineTop from "../assets/Images/head_line.png"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { useState } from "react"

export default function Artifacts() {
  const [showThemeListFilter, setShowThemeListFilter] = useState(false)

  const handleItemsFilterClick = () => {
    setShowThemeListFilter(!showThemeListFilter)
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
          <p className="itemsFilter" onClick={handleItemsFilterClick}>
            {showThemeListFilter ? <AiFillCaretDown /> : <AiFillCaretUp />}
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
          <p className="itemsFilter">
            <AiFillCaretDown />
            Par catégories
          </p>
          <div id="catListFilter">
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
          <p className="itemsFilter">
            <AiFillCaretDown />
            Par prix
          </p>
          <div id="priceListFilter">
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
