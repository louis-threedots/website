import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import LoadingModal from "../loadingModal"
import ChatBox from "./chatBox"
import TTS from "./tts"
import usePyodide from "./usePyodide"

const Demo = () => {
  const [, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const callback = message => {
    if (message?.braille !== undefined) {
      setBraille(message.braille)
    }

    if (message?.text !== undefined) {
      newLouisMessage(message.text)
    }
  }

  const ttsRef = useRef()

  const { loading, attachGlobal, runPython } = usePyodide(callback)
  const [braille, setBraille] = useState("Loading...")

  const [numCells, setNumCells] = useState(3)

  const [messages, addMessage] = useReducer((state, message) => {
    if (message && state && !state.includes(message)) {
      state.push(message)
      return state
    }
    return state
  }, [])

  const newUserMessage = content => {
    addMessage({ content, from: "user" })
    runPython(`newMessage("${content}")`)
  }

  const newLouisMessage = content => {
    addMessage({ content, from: "louis" })
    ttsRef.current.speak(content)
    forceUpdate()
  }

  useEffect(() => {
    if (!loading) {
      attachGlobal({})
      runPython(`from js import demo`)
      runPython(`exec(demo)`)
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
                    Cells ({numCells})
                  </h3>
                </div>

                <div className="ml-4 mt-2 flex-shrink-0">
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      disabled={numCells < 2}
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-indigo-600"
                      onClick={() => setNumCells(numCells - 1)}
                    >
                      Remove cell
                    </button>
                  </span>
                  <span className="ml-4 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                      onClick={() => setNumCells(numCells + 1)}
                    >
                      Add cell
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 px-4 py-3 flex items-start lg:justify-center lg:px-8 lg:py-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="ml-3 flex-1 lg:flex lg:justify-between">
                <p className="text-sm leading-6 font-medium text-blue-700">
                  Please note, this interactive demonstration implements only a
                  subset of the features of the physical device.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-96 md:h-192 bg-gray-200 pb-6 md:pb-16">
              <div className="flex-1">{braille}</div>
              <ChatBox messages={messages} send={newUserMessage} />
            </div>

            <div className="px-4 py-3 bg-gray-50 sm:px-6 flex flex-row-reverse">
              <TTS ref={ttsRef} />
            </div>
          </div>
        </div>
      </div>
      <LoadingModal
        loading={loading}
        message={"This interactive demo requires a modern browser."}
      />
    </>
  )
}

export default Demo
