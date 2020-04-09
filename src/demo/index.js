import React from "react"
import Loadable from "react-loadable"

const LoadableDemo = Loadable({
  loader: () => import("../components/demo"),
  loading: () => <span>Loading...</span>,
})

const Demo = () => (
  <>
    <div>
      <div className="bg-blue-50 px-4 py-3 flex items-start lg:justify-center lg:px-8 lg:py-4">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="ml-3 flex-1 lg:flex lg:justify-between">
          <p className="text-sm leading-6 font-medium text-blue-700">
            This interactive demo requires a modern browser (speech recognition
            works only in Google Chrome).
          </p>
          <p className="mt-2 text-sm leading-6 lg:mt-0 lg:ml-4">
            <a
              href="https://browsehappy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-700 hover:underline hover:text-blue-500 transition ease-in-out duration-150"
            >
              Find out more and upgrade →
            </a>
          </p>
        </div>
      </div>
    </div>
    <LoadableDemo />
  </>
)

export default Demo
