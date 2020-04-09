import React, { useEffect, useState } from "react"
import classNames from "../utils/classNames"
import Transition from "./transition"

const MODAL_DISMISS_TIMEOUT = 1600

export const LoadingModal = ({ loading, message }) => {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (!loading) setTimeout(setOpen, MODAL_DISMISS_TIMEOUT, false)
  }, [loading])

  return (
    <div
      className={classNames(
        "fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center z-10",
        !open && "pointer-events-none"
      )}
    >
      <Transition
        show={open}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
      </Transition>

      <Transition
        show={open}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">
          <div>
            <div
              className={classNames(
                "mx-auto flex items-center justify-center h-12 w-12 rounded-full",
                loading ? "bg-orange-100" : "bg-green-100"
              )}
            >
              {loading ? (
                <svg
                  fill="currentColor"
                  className="h-6 w-6 text-orange-600"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-green-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {loading ? "Loading..." : "Complete!"}
              </h3>
              <p className="mt-4">{message}</p>
              <p className="mt-4">Can take up to one minute...</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default LoadingModal
