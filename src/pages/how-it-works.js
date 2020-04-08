import React from "react"
import FirmwareSimulator from "../components/firmwareSimulator"
import SEO from "../components/seo"

const HowItWorks = () => (
  <>
    <SEO title="How it Works" />
    How it Works Page
    <div>
      <h3>Firmware</h3>
      <FirmwareSimulator
        steps={[
          { image: "Image 1", description: "Description 1" },
          { image: "Image 2", description: "Description 2" },
        ]}
      />
    </div>
  </>
)

export default HowItWorks
