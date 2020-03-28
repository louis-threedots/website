import { useState } from "react"

const pyodide = new Worker("./pyodideWorker.js")

const usePyodide = callback => {
  const [loading, setLoading] = useState(true)

  pyodide.onmessage = event => {
    const results = event.data
    if (loading) setLoading(false)
    callback(results)
  }

  const runPython = code =>
    pyodide.postMessage({
      method: "runPython",
      data: code,
    })

  const loadPackages = packages =>
    pyodide.postMessage({
      method: "loadPackages",
      data: packages,
    })

  const getPythonGlobal = name =>
    pyodide.postMessage({
      method: "pyimport",
      data: name,
    })

  const attachGlobal = data =>
    pyodide.postMessage({
      method: "attachGlobal",
      data,
    })

  return {
    loading,
    pyodide,
    runPython,
    loadPackages,
    getPythonGlobal,
    attachGlobal,
  }
}

export default usePyodide
