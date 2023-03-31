import React from "react"

import Clip from "../assets/videos/clip1.mp4"

const PlayerVideo = () => {
  return (
    <>
      <div className="video">
        <video width="542px" height="500px" controls>
          <source src={Clip} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default PlayerVideo
