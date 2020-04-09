import React, { useState } from "react"
import Loadable from "react-loadable"
import ContactSupport from "../components/documentation/contactSupport"
import DeveloperDocumentation from "../components/documentation/developerDocumentation"
import Installation from "../components/documentation/installation"
import Maintenance from "../components/documentation/maintenance"
import Operation from "../components/documentation/operation"
import TroubleshootingGuide from "../components/documentation/troubleshootingGuide"
import SEO from "../components/seo"
import classNames from "../utils/classNames"
import "./documentation.css"

const LoadableOverview = Loadable({
  loader: () => import("../components/documentation/overview"),
  loading: () => <span>Loading...</span>,
})

const Documentation = () => {
  const [bannerShown, setBannerShown] = useState(true)

  return (
    <>
      <SEO title="Documentation" />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9">
          User Guide
        </h1>
        <div className="mt-6 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 lg:gap-6">
          <div className="lg:col-span-4">
            <ul className="sticky top-8 space-y-5 text-sm leading-5 text-gray-900 font-medium lg:mr-10 lg:overflow-y-auto toc">
              <li className="space-y-3">
                <a
                  className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  href="#overview"
                >
                  Overview
                </a>
                <ul className="pl-3 space-y-3">
                  <li className="space-y-3">
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#introduction"
                    >
                      Introduction
                    </a>
                    <ul className="pl-3 space-y-3">
                      <li>
                        <a
                          className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                          href="#audio-described-user-guide"
                        >
                          Audio Described User Guide
                        </a>
                      </li>
                      <li>
                        <a
                          className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                          href="#whats-included"
                        >
                          What's Included?
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="space-y-3">
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#the-main-controller"
                    >
                      The Main Controller
                    </a>
                  </li>
                  <li className="space-y-3">
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#refreshable-cells"
                    >
                      Refreshable Cells
                    </a>
                  </li>
                  <li className="space-y-3">
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#interacting-with-louis"
                    >
                      Interacting with <span className="font-louis">louis</span>
                    </a>
                    <ul className="pl-3 space-y-3">
                      <li>
                        <a
                          className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                          href="#audio-speech-output"
                        >
                          Audio Speech Output
                        </a>
                      </li>
                      <li>
                        <a
                          className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                          href="#audio-speech-input"
                        >
                          Audio Speech Input
                        </a>
                      </li>
                      <li>
                        <a
                          className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                          href="#braille-output-through-the-cells"
                        >
                          Braille Output Through the Cells
                        </a>
                      </li>
                      <li>
                        <a
                          className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                          href="#selection-of-a-particular-cell"
                        >
                          Selection of a Particular Cell
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="space-y-3">
                <a
                  className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  href="#installation"
                >
                  Installation
                </a>
                <ul className="pl-3 space-y-3">
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#setup-the-hardware"
                    >
                      Set up the Hardware
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#setup-the-software"
                    >
                      Set up the Software
                    </a>
                  </li>
                </ul>
              </li>
              <li className="space-y-3">
                <a
                  className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  href="#operation"
                >
                  Operation
                </a>
                <ul className="pl-3 space-y-3">
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#general-commands"
                    >
                      General Commands
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#charge-louis"
                    >
                      Charge <span className="font-louis">louis</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#switch-on"
                    >
                      Switch on
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#switch-off"
                    >
                      Switch off
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#open-an-application"
                    >
                      Open an Application
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#exit-an-application"
                    >
                      Exit an Application
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#install-an-application"
                    >
                      Install an Application
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#help"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#pagination"
                    >
                      Pagination
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#contractions"
                    >
                      Contractions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="space-y-3">
                <a
                  className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  href="#troubleshooting-guide"
                >
                  Troubleshooting Guide
                </a>
              </li>
              <li className="space-y-3">
                <a
                  className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  href="#maintenance"
                >
                  Maintenance
                </a>
                <ul className="pl-3 space-y-3">
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#cleaning-louis"
                    >
                      Cleaning <span className="font-louis">louis</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#cleaning-connectors"
                    >
                      Cleaning the Connectors
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#replacing-battery"
                    >
                      Replacing the Battery
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#calibrating-cell"
                    >
                      Calibrating a Cell’s Output
                    </a>
                  </li>
                </ul>
              </li>
              <li className="space-y-3">
                <a
                  className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                  href="#developer-documentation"
                >
                  Developer Documentation
                </a>
                <ul className="pl-3 space-y-3">
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#cell"
                    >
                      Cell
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#audio"
                    >
                      Audio
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#direct"
                    >
                      Direct
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <ContactSupport />
            <div className="prose my-4">
              <LoadableOverview />
              <hr />
              <Installation />
              <hr />
              <Operation />
              <hr />
              <TroubleshootingGuide />
              <hr />
              <Maintenance />
              <hr />
              <DeveloperDocumentation />
            </div>
            <ContactSupport />
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "fixed inset-x-0 bottom-0",
          !bannerShown && "hidden"
        )}
      >
        <div className="bg-indigo-600">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-indigo-800">
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="lg:hidden">This page is accessible!</span>
                  <span className="hidden lg:inline">
                    This page can be used with assistive technologies (e.g.
                    screen readers).
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <div className="rounded-md shadow-sm">
                  <a
                    href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Flouis-threedots.github.io%2Fwebsite%2Fdocumentation#accessibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 sm:-mr-2 transition ease-in-out duration-150"
                  aria-label="Dismiss"
                  onClick={() => setBannerShown(false)}
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation
