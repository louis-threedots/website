import { Link } from "gatsby"
import React from "react"

const ContactSupport = () => (
  <div className="bg-blue-50 px-4 py-3 overflow-hidden rounded-lg flex items-start lg:justify-center lg:px-8 lg:py-4">
    <div className="flex-shrink-0">
      <svg
        class="h-6 w-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="ml-3 flex-1 lg:flex lg:justify-between">
      <p className="text-sm leading-6 font-medium text-blue-700">
        Got a question?
      </p>
      <p className="mt-2 text-sm leading-6 lg:mt-0 lg:ml-4">
        <Link
          to="/comments"
          className="font-medium text-blue-700 hover:underline hover:text-blue-500 transition ease-in-out duration-150"
        >
          Ask Support →
        </Link>
      </p>
    </div>
  </div>
)

export default ContactSupport
