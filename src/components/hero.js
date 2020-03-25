import { Link } from "gatsby"
import React from "react"

const Hero = () => (
  <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
    <div className="text-center">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl font-louis">
        louis | ⠇⠳⠊⠎
      </h2>
      <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:text-4xl md:max-w-5xl font-serif">
        the <span className="italic text-indigo-600">braill</span>
        iant assistant
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link
            to="/demo"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Interactive Demo
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link
            to="/documentation"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            Docs
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
