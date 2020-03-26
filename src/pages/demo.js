import React from "react"
import SEO from "../components/seo"

const Demo = () => {
  languagePluginLoader.then(() => {
    // pyodide is now ready to use...
    console.log(pyodide.runPython("import sys\nsys.version"))
  })
  return (
    <>
      <SEO title="Interactive Demo" />
      <script src="https://pyodide.cdn.iodide.io/pyodide.js"></script>
    </>
  )
}

export default Demo
