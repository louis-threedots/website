const BASE_URL = "https://pyodide.cdn.iodide.io/"
self.languagePluginUrl = BASE_URL
importScripts(`${BASE_URL}pyodide.js`)

const files = {
  characters: "./python/characters.py",
  cell: "./python/cell.py",
  app: "./python/app.py",
  main: "./python/main.py",
  demo: "./python/demo.py",
}

const defaultData = {}

const loadingDefaultData = new Promise((resolve, reject) => {
  const promises = Object.entries(files).map(async ([name, path]) => {
    const response = await fetch(path)
    const content = await response.text()
    defaultData[name] = content
  })

  Promise.all(promises).then(() => {
    console.log("Python files loaded")
    resolve(true)
  })
})

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
    case "reload":
      const i = new Promise((resolve, reject) => {
        const promises = Object.entries(files).map(async ([name, path]) => {
          const response = await fetch(path)
          const content = await response.text()
          defaultData[name] = content
        })

        Promise.all(promises).then(() => {
          console.log("Python files loaded")
          resolve(true)
        })
      })

      await i

      Object.entries({ ...defaultData, ...data.data }).map(([key, value]) => {
        if (key !== "__main__") self[key] = value
      })
      break
    default:
      throw new Error("Invalid method called.")
  }
}
