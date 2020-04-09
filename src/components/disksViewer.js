import React from "react"
import { STLViewer } from "react-stl-obj-viewer"

const DisksViewer = () => (
  <STLViewer
    width={600}
    height={600}
    modelColor="#f0f0f0"
    backgroundColor="#ffffff"
    rotate={true}
    orbitControls={true}
    url={"/disks_with_catch.stl"}
    className={"mx-auto"}
  />
)

export default DisksViewer
