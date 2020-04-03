import { useEffect, useState } from "react"

const usePyodide = callback => {
  const [pyodide, setPyodide] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `self.pyodideWorker = new Worker('/${
      process.env.NODE_ENV === "development" ? "" : "website/"
    }pyodideWorker.js')`
    document.body.appendChild(script)

    window.pyodideWorker.onmessage = event => {
      const results = event.data
      if (loading) setLoading(false)
      callback(results)
    }

    window.pyodideWorker.postMessage({
      method: "runPython",
      data: "True",
    })

    setPyodide(window.pyodideWorker)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const runPython = code => {
    if (pyodide)
      pyodide.postMessage({
        method: "runPython",
        data: code,
      })
  }

  const loadPackages = packages => {
    if (pyodide)
      pyodide.postMessage({
        method: "loadPackages",
        data: packages,
      })
  }

  const getPythonGlobal = name => {
    if (pyodide)
      pyodide.postMessage({
        method: "pyimport",
        data: name,
      })
  }

  const attachGlobal = data => {
    if (pyodide)
      pyodide.postMessage({
        method: "attachGlobal",
        data,
      })
  }

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
