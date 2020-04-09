import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const GettingStartedKit = () => {
  const benefits = [
    "Main Controller Base",
    "Refreshable Braille Display Cell",
    "User Guide",
    "Software Developer Toolkit (SDK)",
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 h-1/2 bg-gray-900"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
              Getting Started Kit
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500">
              All you need to start learning braille, and access to our full set
              of applications and other fun things.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  What's included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                {benefits.map(benefit => (
                  <li
                    className="mt-5 first:mt-0 lg:mt-0 flex items-start lg:col-span-1"
                    key={benefit}
                  >
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-5 text-gray-700">
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg leading-6 font-medium text-gray-900">
              Start learning braille today
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
              <span>£99</span>
              <span className="ml-3 text-xl leading-7 font-medium text-gray-500">
                GBP
              </span>
            </div>
            <p className="mt-4 text-sm leading-5">
              <Link to="/demo" className="font-medium text-gray-500 underline">
                Try our free interactive demo
              </Link>
            </p>
            <div className="mt-6">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Buy now
                </a>
              </div>
            </div>
            <div className="mt-4 text-sm leading-5">
              <Link to="/documentation" className="font-medium text-gray-900">
                Check out the User Guide{" "}
                <span className="font-normal text-gray-500">(20MB)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AdditionalCell = () => {
  return (
    <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <div>
              <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
                Looking to Grow?
              </h3>
            </div>
            <div className="mt-4 text-lg leading-7 text-gray-500">
              Get an additional cell for just{" "}
              <strong className="font-semibold text-gray-900">£29</strong>.
            </div>
          </div>
          <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <a
              href="#"
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Budget = () => {
  return (
    <>
      <SEO title="Budget" />

      <div className="bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                Pricing
              </h2>
              <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                Pay-as-you-learn pricing
              </p>
              <p className="mt-2 text-xl leading-7 text-gray-300">
                Start off small, grow big
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:pb-24">
          <GettingStartedKit />
          <AdditionalCell />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-indigo-200 border-t-2">
        <h2 className="text-3xl py-6 font-bold leading-tight text-gray-900">
          Behind the Scenes
        </h2>

        <h3 className="text-2xl py-4 leading-tight text-gray-700">
          Total Budget Consumption
        </h3>
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Budget
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Consumption
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Human Resources
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      398 Hours
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      404 Hours
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      98.5%
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Technician Time
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      0.5 Hours
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      10 Hours
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      5%
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Materials
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      £90.94
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      £98.00
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      93%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h3 className="text-2xl py-4 leading-tight text-gray-700 mt-10">
          Breakdown of material costs
        </h3>
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Time (hours)
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Usage cost (£)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white even:bg-gray-50 font-bold">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 ">
                      Iteration I
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5  numeric-tabular-nums">
                      0.00
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 border-t-2">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      LEGO EV3 Mindstorms Kit
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums"></td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Large disk (86g) 001
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      6.75
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      3.40
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Large disk (74g) 002
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      5.67
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      3.70
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Small disk (20g) 001
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      2.50
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      1.00
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Large disk v2 (36g) 005
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      4.50
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      1.80
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Small disk v2 (12g) 003
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      1.50
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.60
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Arduino Uno (x2)
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      33.5
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Breadboard (x2)
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      11.80
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Logitech C270 Webcam
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      17.49
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      SN754410NE Motor driver (x2)
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      3.80
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 ">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Misc. components
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      3.00
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 font-bold border-t-2">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5  ">
                      Iteration II
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 "></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5  numeric-tabular-nums">
                      69.59
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 border-t-2">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Large disk (17g) 006
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      2.38
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums"></td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Small disk (9g) 004
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      1.12
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.45
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Large disk (22g) 007
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      2.38
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums"></td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Catch (1g) 001
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      0.12
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums"></td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Large disk (17g) 008
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      4.45
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.85
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Catch (1g) 002
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      0.22
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums"></td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Catch (1g) 003
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      0.12
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.05
                    </td>
                  </tr>

                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      CNC casing
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      1
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      20
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      ATMEGA328P-PU Microcontrolle​r
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      1.88
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Crystal Oscillator 20pF
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.99
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Voltage Regulators
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.45
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      RJ12 socket
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      0.44
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                      Custome Printed Circuit Board
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"></td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 text-gray-500 numeric-tabular-nums">
                      5.00
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 font-bold border-t-2">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm  leading-5 ">
                      Iteration III
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 ">
                      11.79
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5  numeric-tabular-nums">
                      21.25
                    </td>
                  </tr>
                  <tr className="bg-white even:bg-gray-50 font-bold border-t-2 border-black">
                    <td className="px-6 py-4 whitespace-no-wrap text-sm  leading-5 ">
                      Total
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 ">
                      11.79
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5  numeric-tabular-nums">
                      90.94
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Budget
