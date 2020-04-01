const BASE_URL = "https://pyodide.cdn.iodide.io/"
self.languagePluginUrl = BASE_URL
importScripts(`${BASE_URL}pyodide.js`)

importScripts("./loadPython.js")

var onmessage = async event => {
  await languagePluginLoader
  await loadingDefaultData

  const { data } = event

  switch (data.method) {
    case "runPython":
      pyodide.runPythonAsync(data.data).then(self.postMessage)
      break
    case "loadPackages":
      await pyodide.loadPackage(data.data)
      break
    case "pyimport":
      self.postMessage(pyodide.pyimport(data.data))
      break
    case "attachGlobal":
      const globals = { ...defaultData, ...data.data }
      Object.entries(globals).map(([key, value]) => {
        if (key !== "__main__") self[key] = value
      })
      break
    default:
      throw new Error("Invalid method called.")
  }
}
