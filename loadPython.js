const files = {
  demo: "./python/demo.py",
}

self.defaultData = {}

self.loadingDefaultData = new Promise((resolve, reject) => {
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
