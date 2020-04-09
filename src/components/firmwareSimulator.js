import React, { useState } from "react"
import "./firmwareSimulator.css"

const FirmwareSimulator = ({ steps, title }) => {
  const [step, setStep] = useState(0)
  const hasNextStep = step < steps.length - 1
  const hasPreviousStep = step > 0

  const { image, description } = steps[step]

  return (
    <div className="rounded-lg bg-indigo-50 px-6 py-8 sm:p-10 my-10 flex flex-col items-center">
      <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
        {title}
      </h3>
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Step {step + 1} of {steps.length}
      </p>
      <div className="w-1/2 my-10">{image}</div>
      <div className="text-base text-gray-700 my-5">{description}</div>
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
