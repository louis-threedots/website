import React, { useRef, useState } from "react"
import ReactUtterances from "react-utterances"
import SEO from "../components/seo"
import IframeResizer from 'iframe-resizer-react'

const REPO = "louis-threedots/website"

const Comments = () => { 
  return (
    <>
      <SEO title="Comments" />
      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Got a question?
            <br />
            <span class="text-indigo-600">Ask away.</span>
          </h2>
        </div>
      </div>
      <IframeResizer
        heightCalculationMethod="lowestElement"
        log
        src="https://sdp2020.gitlab.io/posts/group10/"
        style={{ width: '1px', minWidth: '100%'}}
      />
    </>
  )
}

export default Comments
