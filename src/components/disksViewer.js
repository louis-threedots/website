import React from "react"
import { STLViewer } from "react-stl-obj-viewer"

const DisksViewer = () => (
  <STLViewer
    width={400}
    height={400}
    modelColor="#4c51bf"
    backgroundColor="#EAEAEA"
    rotate={true}
    orbitControls={true}
    url={"/website/disks_with_catch.stl"}
  />
)

export default DisksViewer
