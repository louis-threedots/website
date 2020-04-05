import React, { useState } from "react"
import DeveloperDocumentation from "../components/documentation/developerDocumentation"
import Installation from "../components/documentation/installation"
import Operation from "../components/documentation/operation"
import Overview from "../components/documentation/overview"
import TroubleshootingGuide from "../components/documentation/troubleshootingGuide"
import SEO from "../components/seo"
import classNames from "../utils/classNames"
import "./documentation.css"

const Documentation = () => {
  const [bannerShown, setBannerShown] = useState(true)

  return (
    <>
      <SEO title="Documentation" />

      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9">
          User Guide
        </h1>
        <div className="mt-6 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 lg:gap-6">
          <div className="lg:col-span-4">
            <ul className="sticky top-8 space-y-5 text-sm leading-5 text-gray-900 font-medium">
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
                          Braille Ouptut Through the Cells
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
                      Setup the Hardware
                    </a>
                  </li>
                  <li>
                    <a
                      className="block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                      href="#setup-the-software"
                    >
                      Setup the Software
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
                      href="#general"
                    >
                      General
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
                      href="#close-an-application"
                    >
                      Close an Application
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
            <div className="prose">
              <Overview />
              <hr />
              <Installation />
              <hr />
              <Operation />
              <hr />
              <TroubleshootingGuide />
              <hr />
              <DeveloperDocumentation />
            </div>
          </div>
        </div>
      </div>

      <div
        class={classNames("fixed inset-x-0 bottom-0", !bannerShown && "hidden")}
      >
        <div class="bg-indigo-600">
          <div class="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <span class="flex p-2 rounded-lg bg-indigo-800">
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </span>
                <p class="ml-3 font-medium text-white truncate">
                  <span class="md:hidden">This page is accessible!</span>
                  <span class="hidden md:inline">
                    This page can be used with assistive technologies (e.g.
                    screen readers).
                  </span>
                </p>
              </div>
              <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <div class="rounded-md shadow-sm">
                  <a
                    href="https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Flouis-threedots.github.io%2Fwebsite%2Fdocumentation"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 sm:-mr-2 transition ease-in-out duration-150"
                  aria-label="Dismiss"
                  onClick={() => setBannerShown(false)}
                >
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
