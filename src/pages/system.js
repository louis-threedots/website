import React from "react"
import SEO from "../components/seo"

const System = () => (
  <>
    <SEO title="System" />
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            System
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            What <span className="font-louis">louis</span> does.
          </h3>

          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          <span className="font-louis">louis</span> is a <b>modular</b> Braille
          display, catered to teaching through an innovative and accessible
          system of the creation and usage of apps, which can teach anyone from
          kids to adults to use braille. (images of louis?)
          </p>

          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Tarket Market.
          </h3>

          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          In the UK <b>only 4%</b> of visually impaired people are literate in braille.
          Research has shown that the ability to read braille has <b>increased
          opportunities</b> in <b>education and employment</b> for
          visually impaired people. (nice image of UK literacy rate from first product pitch?)
          </p>

          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Features.
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          - Modular<br/> 
          - Cheaper<br/>
          - Easy development through open SDK<br/>
          - "Alexa Style" voice-control to avoid complicated button combinations.
          </p>

          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Built for the Future.
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          When creating <span className="font-louis">louis</span>, we were keen to make something that was bigger than our team. A product which, through 3rd party developers, could be expanded and used in ways which we have not even imagined yet.
          Our open APK means that developers without an understanding of the low-level workings of the system (or even without a <span className="font-louis">louis</span> system themselves) can develop apps that are as deep and complex as they like. <br/>Our vision was always to make a device that could be used throughout a user’s braille literacy journey, starting with learning, and ending as a usable and cheap braille display. With more precise machinery and production techniques, our product could be minituarised further, which would open up the possibility of an even more practical display for graduates of our learning apps.


          </p>

          </div>
        </div>
      </div>
  </>
)

export default System
