import React from "react"
import SEO from "../components/seo"
import in_cell from "../images/in_cell.gif"
import just_disks_all from "../images/just_disks_all.gif"

const System = () => (
  <>
    <SEO title="System" />

    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              System
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              What <span className="font-louis">louis</span> does.
            </h3>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              <span className="font-louis">louis</span> is a <b>modular</b>{" "}
              Braille display, catered to teaching through an innovative and
              accessible system of the creation and usage of apps, which can
              teach anyone from kids to adults to use braille. (images of
              louis?)
            </p>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Target Market.
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              In the UK <b>only 4%</b> of visually impaired people are literate
              in braille and only 1% are regular users. Research has shown that the ability to understand braille
              has <b>increased opportunities</b> in{" "}
              <b>education and employment</b> for visually impaired people.
            </p>

            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9 mt-16">
              Key Features.
            </h4>
            <ul className="mt-10">
              <li className="mt-10 first:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 mt-3">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Modularity reduces cost by allowing for “pay-as-you-learn” pricing
                    </h5>
                  </div>
                </div>
              </li>
              <li className="mt-10 first:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 mt-3">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Cheaper than the alternative and cheaper to repair
                    </h5>
                  </div>
                </div>
              </li>
              <li className="mt-10 first:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 mt-3">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Easy development for 3rd party developers through open API.
                    </h5>
                  </div>
                </div>
              </li>
              <li className="mt-10 first:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Intuitive voice-controller user interface replaces pushbutton-driven navigation
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width="784"
                height="404"
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width="490"
              src={just_disks_all}
              alt="Moving louis disks"
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Built for the Future.
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">

              When creating <span className="font-louis">louis</span>, we wanted to make something that was bigger
              than our team. Something which through 3rd party developers could
              be expanded and used in ways which we could not even imagine.

              Our open API means that developers without an understanding of the
              low-level workings of the system - or even without a <span className="font-louis">louis</span> system
              themselves - can develop apps that are as deep and complex as they
              like.

              Our vision was always to make a device that could be used
              throughout a user’s braille literacy journey, starting with
              learning, and ending as a braille display for future use. After
              many iterations, we changed our design so that in the future, with
              more precise machinery and production techniques, our product
              could be minituarised further. This would open up the possibility
              of a more practical refreshable display for advanced users.
              Furthermore, given the modularity of <span className="font-louis">louis</span>, there is every
              possibility that if multiple sizes of braille were available,
              users could replace these and decrease or increase the size of
              their braille as they like. We want <span className="font-louis">louis</span> to be more than just a
              learning device.

              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width="784"
                  height="404"
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width="490"
                src={in_cell}
                alt="Moving louis cell"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:items-center">
          <div className="relative">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Market Research
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
            Fewer than 1% of the two million visually impaired (not necessarily completely blind) people in the UK are regular users of Braille. This includes both the braille newbies (who might only know uncontracted braille), and also the very experienced users (who might learn from Braille music and play to professional level).

This means 99% of the visually impaired don't know Braille at all. They are not able to read even the most simple but crucial information such as button numbers in lifts or drug labels.

So, roughly, there's a potentially 10x to 100x larger market for teaching new braille users than there is for serving only the existing ones. We believe that some organizations have been focusing too much on creating Braille content but not enough on making sure people can read it! Teaching visually-impaired people even the basics of Braille would already be a step in the right direction.

Problems in Braille Education and How We're Solving Them:
Expensive teaching materials: we solve it by having the teaching materials on one relatively cheap device.
Shortage of special educators: we help the special educators leverage their expertise by creating scalable learning experiences (for example, interactive voice guided courses).

There currently are no competitors taking this exact approach.

We also conducted user-testing and user-interviews at the Royal National Institute of Blind People. The information gathered there was extremely valuable and corroborated our initial hypotheses about the market. The visually-impared participants said that learning braille was a tough task for them when they were young. They also mentioned that now that they know braille, the price of braille books and e-readers is a big obstacle. All of the participants who had learned braille, said it was a crucial part of their daily lives: finding medicine, discerning objects by the braille tags on them or reading books.

            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default System
