import { useEffect, useState } from "react"

const LOADING_TIMEOUT = 2000

const usePyodide = () => {
  const [loading, setLoading] = useState(true)
  const [pyodide, setPyodide] = useState()

  const load = () => {
    if (window.languagePluginLoader !== undefined) {
      console.info("Caught loading promise.")
      console.info("Waiting for initialization...")
      window.languagePluginLoader.then(() => {
        console.info("Initialized!")
        setPyodide(window.pyodide)
        setLoading(false)
      })
    } else {
      console.info("Still waiting for loading promise...")
      setTimeout(load, LOADING_TIMEOUT)
    }
  }

  useEffect(() => {
    console.info("Waiting for loading promise...")
    setTimeout(load, LOADING_TIMEOUT)
  }, [])

  return { loading, pyodide }
}

export default usePyodide
