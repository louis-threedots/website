import React from "react"
import DeveloperDocumentation from "../components/documentation/developerDocumentation"
import Installation from "../components/documentation/installation"
import Operation from "../components/documentation/operation"
import Overview from "../components/documentation/overview"
import TroubleshootingGuide from "../components/documentation/troubleshootingGuide"
import SEO from "../components/seo"
import "./documentation.css"

const Budget = () => (
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
  </>
)

export default Budget
