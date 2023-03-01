import React from "react"

import Clip from "../assets/videos/clip1.mp4"

const PlayerVideo = () => {
  return (
    <>
      <video width="100%" height="100%" controls>
        <source src={Clip} type="video/mp4" />
      </video>
    </>
  )
}

export default PlayerVideo
