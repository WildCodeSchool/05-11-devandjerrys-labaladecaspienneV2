import React, { useEffect, useState } from "react"

const Snow = () => {
  const [snowflakes, setSnowflakes] = useState([])
  const [snowflakes2, setSnowflakes2] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [snowfallStarted, setSnowfallStarted] = useState(false)

  useEffect(() => {
    // Création de 50 flocons de neige
    const newSnowflakes = Array.from({ length: 50 }).map((_, index) => (
      <div key={index} className="snowflake" style={getRandomPosition()} />
    ))
    setSnowflakes(newSnowflakes)
    // Animation des flocons de neige
    const interval = setInterval(() => {
      setSnowflakes((prevSnowflakes) => {
        const newSnowflakes = [...prevSnowflakes]
        for (let i = 0; i < newSnowflakes.length; i++) {
          const top = parseInt(newSnowflakes[i].props.style.top)
          if (top > window.innerHeight) {
            // Réinitialisation de la position du flocon de neige
            newSnowflakes[i] = (
              <div key={i} className="snowflake" style={getRandomPosition()} />
            )
          } else {
            // Déplacement du flocon de neige
            newSnowflakes[i] = (
              <div
                key={i}
                className="snowflake"
                style={{ ...newSnowflakes[i].props.style, top: top + 1 }}
              />
            )
          }
        }
        return newSnowflakes
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Création des deuxièmes 50 flocons de neige décalés de 8 secondes
    const newSnowflakes2 = Array.from({ length: 50 }).map((_, index) => (
      <div
        key={index + 50}
        className="snowflake"
        style={{ ...getRandomPosition(), animationDelay: "5s" }}
      />
    ))
    setSnowflakes2(newSnowflakes2)
  }, [snowfallStarted])

  const getRandomPosition = () => {
    return {
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
    }
  }

  return (
    <div className="snow">
      {snowflakes}
      {snowflakes2}
    </div>
  )
}

export default Snow
