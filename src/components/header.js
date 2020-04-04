import { Location } from "@reach/router"
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Hero from "./hero"
import Logo from "./logo"
import Transition from "./transition"

const Header = () => {
  const menuItems = [
    { label: "System", href: "/system" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Evaluation", href: "/evaluation" },
    { label: "Budget", href: "/budget" },
    { label: "Team", href: "/team" },
    { label: "Comments", href: "/comments" },
    { label: "Interactive Demo", href: "/demo", isPrimary: true },
  ]

  const data = useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
    }
  `)
  const [open, setOpen] = useState(false)

  const primaryMenuItem = menuItems.find(({ isPrimary }) => isPrimary)

  return (
    <header>
      <div className="relative bg-gray-50 overflow-hidden">
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-6 sm:pb-8 md:pb-10 lg:pb-14 xl:pb-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-center">
              <div className="flex items-center flex-1 lg:absolute lg:inset-y-0 lg:left-0">
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link to="/" className="text-black h-8 w-auto sm:h-10">
                    <Logo className="h-8 w-auto sm:h-10" format="full" />
                  </Link>
                  <div className="-mr-2 flex items-center lg:hidden">
                    <button
                      onClick={() => setOpen(true)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                {menuItems
                  .filter(({ isPrimary = false }) => !isPrimary)
                  .map(({ label, href }) => (
                    <Link
                      to={href}
                      className="ml-10 first:ml-0 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                      key={label}
                    >
                      {label}
                    </Link>
                  ))}
              </div>
              <div className="hidden lg:absolute lg:flex lg:items-center lg:justify-end lg:inset-y-0 lg:right-0">
                <span className="inline-flex rounded-md shadow">
                  <Link
                    to={primaryMenuItem.href}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-indigo-700 transition duration-150 ease-in-out"
                  >
                    {primaryMenuItem.label}
                  </Link>
                </span>
              </div>
            </nav>
          </div>

          <Location>
            {({ location }) => {
              if (
                location.pathname ===
                (process.env.NODE_ENV === "development"
                  ? "/"
                  : `${data.site.pathPrefix}/`)
              )
                return <Hero />
            }}
          </Location>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 p-2 lg:hidden z-10">
        <Transition
          show={open}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="rounded-lg shadow-md transition transform origin-top-right">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Link to="/">
                    <Logo className="h-8 w-auto" format="full" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
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
              <div className="px-2 pt-2 pb-3">
                {menuItems
                  .filter(({ isPrimary = false }) => !isPrimary)
                  .map(({ label, href }) => (
                    <Link
                      to={href}
                      onClick={() => setOpen(false)}
                      className="mt-1 first:mt-0 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      key={label}
                    >
                      {label}
                    </Link>
                  ))}
              </div>
              <div>
                <Link
                  to={primaryMenuItem.href}
                  onClick={() => setOpen(false)}
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                >
                  {primaryMenuItem.label}
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  )
}

export default Header
