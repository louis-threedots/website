import React, { useEffect, useReducer, useState } from "react"
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit"
import classNames from "../../utils/classNames"
import LoadingModal from "../loadingModal"
import usePyodide from "./usePyodide"

const Demo = () => {
  const callback = results => {
    setContent(results)
  }

  const { loading, attachGlobal, runPython } = usePyodide(callback)
  const { speak, voices } = useSpeechSynthesis()
  const [voice, setVoice] = useState()
  const [content, setContent] = useState("Loading...")
  const [numCells, setNumCells] = useState(3)
  const [textInput, setTextInput] = useState("")
  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: result => {
      setTextInput(result)
    },
  })
  const sendTextInput = () => {
    if (textInput !== "") {
      addMessage({ content: textInput, from: "user" })
    }
    setTextInput("")
  }

  const [messages, addMessage] = useReducer(
    (state, message) => {
      state.push(message)
      return state
    },
    [
      { content: "hi", from: "user" },
      { content: "hello", from: "louis" },
    ]
  )

  useEffect(() => {
    if (voices.length > 0) {
      const defaultVoice = voices.find(voice => voice.default) || voices[0]
      setVoice(defaultVoice)
    }
  }, [voices])

  useEffect(() => {
    if (!loading) {
      attachGlobal({})
      runPython(`from js import demo`)
      runPython(`exec(demo)`)
      runPython('"Hello, world!"')
    }
  }, [loading])

  const ListeningButton = () =>
    listening ? (
      <button
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        onClick={() => {
          stop()
          sendTextInput()
        }}
      >
        <svg
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="ml-2">Stop</span>
      </button>
    ) : (
      <button
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        onClick={() => listen({ lang: "en-GB", interimResults: false })}
      >
        <svg
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="ml-2">Listen</span>
      </button>
    )

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
              <div className="flex-1">Growy</div>
              <div className="w-full md:w-1/3 min-h-full relative bg-gray-50 md:rounded-lg md:mx-8 md:mt-8">
                <div className="absolute flex flex-col bottom-0 top-0 w-full px-4 overflow-y-auto">
                  <div className="flex-1" />
                  <div className="mb-6">
                    {messages.map((message, i) => (
                      <div
                        className={classNames(
                          "p-2 rounded-lg text-white my-4",
                          message.from === "user"
                            ? "bg-indigo-600 text-right"
                            : "bg-gray-600 text-left"
                        )}
                        key={i}
                      >
                        {message.content}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="text_input"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Speak to <span className="font-louis">louis</span>
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex-grow focus-within:z-10">
                        <input
                          id="text_input"
                          className="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          placeholder="help"
                          onChange={event => setTextInput(event.target.value)}
                          value={textInput}
                          onKeyDown={event =>
                            event.key === "Enter" && sendTextInput()
                          }
                        />
                      </div>
                      {listening || (supported && textInput === "") ? (
                        <ListeningButton />
                      ) : (
                        <button
                          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                          onClick={sendTextInput}
                        >
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="ml-2">Send</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-row-reverse">
              <div className="text-left">
                <label
                  htmlFor="voice"
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
      <LoadingModal
        loading={loading}
        message={"This interactive demo requires a modern browser."}
      />
    </>
  )
}

export default Demo
