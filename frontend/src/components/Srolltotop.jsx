import { useState, useEffect } from "react"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="scroll-to-top-button">
      {isVisible && (
        <button onClick={handleClick}>
          <i className="fa fa-chevron-up"></i>
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
