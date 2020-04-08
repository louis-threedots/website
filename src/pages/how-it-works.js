import React from "react"
import { Link } from "gatsby"

import FirmwareSimulator from "../components/firmwareSimulator"
import SEO from "../components/seo"

const HowItWorks = () => (
  <>
    <SEO title="How it Works" />
    <div className="relative pl-5 pt-5">
      <Link
        to="/lab-book"
        className="absolute top-5 right-5 w-48 flex items-center justify-center  py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        Lab Book
      </Link>
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
    </div>
  </>
)

export default HowItWorks
