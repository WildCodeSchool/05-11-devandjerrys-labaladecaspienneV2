import cadres from  "../assets/cadreInterieur.svg"


export default function CardTheme() {
    return (
      <div>
        <button className="buttonTheme">
          <div className="cardTheme">
            <img src={cadres} alt="cadre" className="cadre" />
            <div className="nomTheme">
              <h3 className="themes">THEMES</h3>
            </div>
          </div>
          </button>
      </div>

    )
  }