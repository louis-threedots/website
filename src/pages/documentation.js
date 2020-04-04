import React from "react"
import Installation from "../components/documentation/installation"
import Overview from "../components/documentation/overview"
import SEO from "../components/seo"
import "./documentation.css"

const Budget = () => {
  const overview = {
    Introduction: `Thank you for choosing louis, the brailliant assistant. Louis is an assistive braille learning device that uses interactive apps, games and quizzes to make learning braille fun! Louis is designed to suit braille learners of all ages and ability. In a few simple steps you will be able to begin learning braille in a way that suits you, enabling you to take advantage of the many aspects of the world that require braille literacy.`,
    "Audio Described User Guide": `We understand the irony of providing a printed user guide for a product intended to teach braille. For that reason, once louis is set up, use the voice command “user guide” to access an interactive, audio version of this user guide.`,
    "What's included?": ``,
  }

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
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="prose">
              <Overview />
              <Installation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Budget
