import React, { useEffect, useState } from "react"
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit"
import LoadingModal from "../loadingModal"
import usePyodide from "./usePyodide"

const Demo = () => {
  const callback = results => {
    setContent(results)
  }

  const { loading, attachGlobal, runPython } = usePyodide(callback)
  const { speak, voices } = useSpeechSynthesis()
  const [voice, setVoice] = useState()
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => console.log(result),
  })
  const [content, setContent] = useState("Loading...")

  useEffect(() => {
    if (voices.length > 0) {
      const defaultVoice = voices.find(voice => voice.default) || voices[0]
      setVoice(defaultVoice)
    }
  }, [voices])

  useEffect(() => {
    speak({
      text: `Hi there! I'm louis, the brailliant assistant! Pleased to meet you.`,
      voice,
    })
  }, [voice])

  useEffect(() => {
    if (!loading) {
      attachGlobal({})
      runPython(`from js import demo`)
      runPython(`exec(demo)`)
      runPython('"Hello, world!"')
    }
  }, [loading])

  return (
    <>
      <div className="bg-gray-900 pb-32">
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl leading-9 font-bold text-white">
              <span className="font-louis">louis</span> Demo
            </h1>
          </div>
        </div>
      </div>
      <div className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow">
            <div className="py-5 border-b border-gray-200 px-4 sm:px-6">
              <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                <div className="ml-4 mt-2">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Cells (3)
                  </h3>
                </div>

                <div className="ml-4 mt-2 flex-shrink-0">
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                    >
                      Add cell
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div>
              Content from Python: <br />
              {content}
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-row-reverse">
              <div className="text-left">
                <label
                  for="voice"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Voice
                </label>
                <select
                  id="voice"
                  className="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={event =>
                    setVoice(
                      voices.find(
                        voice => voice.voiceURI === event.target.value
                      )
                    )
                  }
                >
                  {Array.isArray(voices) &&
                    voices
                      .filter(voice => voice.lang.startsWith("en-"))
                      .map(voice => (
                        <option key={voice.voiceURI} value={voice.voiceURI}>
                          {voice.name} ({voice.lang})
                        </option>
                      ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoadingModal loading={loading} />
    </>
  )
}

export default Demo
