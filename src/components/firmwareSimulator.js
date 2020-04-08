import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const FirmwareSimulator = ({ steps }) => {
  const [step, setStep] = useState(0)
  const hasNextStep = step < steps.length - 1
  const hasPreviousStep = step > 0
  const buttonCSS = " bg-gray-50 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 "
  const disabledCSS = "opacity-50 cursor-not-allowed"
  const disabledPreviousCSS = hasPreviousStep?"":disabledCSS
  const disabledNextCSS = hasNextStep?"":disabledCSS

  const { image, description } = steps[step]

  return (
    <div>
      <div>{image}</div>
      <div>{description}</div>
      <div class="inline-flex">
        <button disabled={!hasPreviousStep} className={"rounded-l" + buttonCSS + disabledPreviousCSS} onClick={() => setStep(step - 1)}>
          Previous
        </button>
        <button disabled={!hasNextStep} className={"rounded-r" + buttonCSS + disabledNextCSS}  onClick={() => setStep(step + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default FirmwareSimulator
