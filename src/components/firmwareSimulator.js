import React, { useState } from "react"

const FirmwareSimulator = ({ steps }) => {
  const [step, setStep] = useState(0)
  const hasNextStep = step < steps.length - 1
  const hasPreviousStep = step > 0

  const { image, description } = steps[step]

  return (
    <div>
      <div>{image}</div>
      <div>{description}</div>
      <button disabled={!hasPreviousStep} onClick={() => setStep(step - 1)}>
        Previous
      </button>
      <button disabled={!hasNextStep} onClick={() => setStep(step + 1)}>
        Next
      </button>
    </div>
  )
}

export default FirmwareSimulator
