import React from "react"
import Loadable from "react-loadable"
import SEO from "../components/seo"

const LoadableLouisModelViewer = Loadable({
  loader: () => import("../components/louisModelViewer"),
  loading: () => <span>Loading...</span>,
})

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <div className="relative bg-light">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://i.imgur.com/Gsb3uTV.png"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-dark">
            There's a problem with braille education
          </div>
          <h2 className="mt-2 text-dark text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            99% Of The Visually Impaired Never Learned Braille
          </h2>
          <p className="mt-3 pr-5 text-lg leading-7 text-dark">
            They cannot read <i>it all</i>, and as such, even the most simple
            sources of crucial information are invisible to them. Choosing a
            button to press in an elevator or discerning different drug boxes -
            when unable to read braille, these mundane tasks become sources of
            frustration and even danger.
          </p>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://i.imgur.com/n6gdsFH.png"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-dark">
            First Things First
          </div>
          <h2 className="mt-2 text-dark text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Focus on Education
          </h2>
          <p className="mt-3 text-lg leading-7 text-dark">
            Braille is <i>the way</i> for the visually impaired to quickly
            gather information in the physical world, yet the vast majority
            never received proper education that would allow them to learn and
            use it. There's an incredibly big untapped market for teaching
            braille. That's where we come in.
          </p>
        </div>
      </div>
    </div>

    <div className="relative bg-light">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://i.imgur.com/N9KD1yG.png"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-dark">
            Stronger Together
          </div>
          <h2 className="mt-2 text-dark text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Device for Education at Scale
          </h2>
          <p className="mt-3 pr-5 text-lg leading-7 text-dark">
            We help special educators leverage their expertise by creating
            interactive learning experiences with apps than can be downloaded by
            anyone, anywhere. Abundance of quality teaching materials on one
            portable device. Long gone are the days of expensive braille books.
          </p>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://i.imgur.com/t7sCnpg.png?1"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-dark">
            Braille for Everyone
          </div>
          <h2 className="mt-2 text-dark text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
            Innovative Braille Display
          </h2>
          <p className="mt-3 text-lg leading-7 text-dark">
            Our innovative spinning disc braille cell design delivers currently
            unmatched price-to-quality ratio. Cutting down costs while
            delivering speed and a pleasant user experience.
          </p>
        </div>
      </div>
    </div>

    <LoadableLouisModelViewer />
  </>
)

export default IndexPage
