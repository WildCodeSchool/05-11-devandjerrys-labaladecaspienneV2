import { useRef, useEffect } from "react"

import Plume from "../assets/Images/plume.png"

function PlumeCursor() {
  const plumeRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      plumeRef.current.style.top = e.pageY + "px"
      plumeRef.current.style.left = e.pageX + "px"
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <img
      src={Plume}
      alt="custom cursor"
      className="plume-cursor"
      ref={plumeRef}
    />
  )
}
export default PlumeCursor
