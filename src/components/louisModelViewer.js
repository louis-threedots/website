import React from "react"
import { STLViewer } from "react-stl-obj-viewer"

const LouisModelViewer = () => (
  <STLViewer
    width={100}
    height={500}
    modelColor="#4c51bf"
    backgroundColor="#EAEAEA"
    rotate={true}
    orbitControls={true}
    url={"/louis.stl"}
  />
)

export default LouisModelViewer
