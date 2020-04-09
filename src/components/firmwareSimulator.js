import React, { useState } from "react"
import "./firmwareSimulator.css"

const FirmwareSimulator = ({ steps, title }) => {
  const [step, setStep] = useState(0)
  const hasNextStep = step < steps.length - 1
  const hasPreviousStep = step > 0

  const { image, description } = steps[step]

  return (
    <div>
      <h4>{title}</h4>
      <p>
        Step {step + 1} of {steps.length}
      </p>
      <div>{image}</div>
      <div>{description}</div>
      <div className="inline-flex">
        <button
          disabled={!hasPreviousStep}
          className="rounded-l paginate-control"
          onClick={() => setStep(step - 1)}
        >
          Previous
        </button>
        <button
          disabled={!hasNextStep}
          className="rounded-r paginate-control"
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FirmwareSimulator
