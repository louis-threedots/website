import React from "react"
import { STLViewer } from "react-stl-obj-viewer"

const DisksViewer = () => (
  <STLViewer
    width={400}
    height={400}
    modelColor="#b8b8b8"
    backgroundColor="#e3fcf1"
    rotate={true}
    orbitControls={true}
    url={"/website/disks_with_catch.stl"}
  />
)

export default DisksViewer
