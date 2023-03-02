import LineTop from "../assets/Images/head_line.png"
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai"
import { useState, useEffect } from "react"
import axios from "axios"
import EshopCard from "@components/EshopCard"

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

  const [artiSelect, setArtiSelect] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/artifacts")
      .then((res) => setArtiSelect(res.data))
  }, [])
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
      </div>
    </div>
  )
}
