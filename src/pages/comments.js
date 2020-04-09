import React from "react"
import SEO from "../components/seo"

const Comments = () => (
  <>
    <SEO title="Comments" />
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Got a question?
          <br />
          <span className="text-indigo-600">Ask away.</span>
        </h2>
        <p className="mt-8">
          The official University of Edinburgh comment page can be found{" "}
          <a
            href="https://sdp2020.gitlab.io/posts/group10/"
            className="font-medium text-gray-500 underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  </>
)

export default Comments
