import React, { useState } from "react"
import { useSpeechRecognition } from "react-speech-kit"
import classNames from "../../utils/classNames"

const ChatBox = ({ messages, send }) => {
  const [textInput, setTextInput] = useState("")
  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: result => {
      setTextInput(result)
    },
  })

  const sendTextInput = () => {
    send(textInput)
    setTextInput("")
  }

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
    <div className="w-full md:w-1/3 min-h-full relative bg-gray-50 md:rounded-lg md:mx-8 md:mt-8 md:shadow-lg">
      <div className="absolute flex flex-col bottom-0 top-0 w-full px-4 overflow-y-auto">
        <div className="flex-1" />
        <div className="mb-6">
          {messages.length === 0 ? (
            <div className="text-gray-500 text-center text-sm">
              Don't be shy! Say something ↓
            </div>
          ) : (
            messages.map((message, i) => (
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
            ))
          )}
        </div>

        <div className="pb-4">
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
                onKeyDown={event => event.key === "Enter" && sendTextInput()}
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
  )
}

export default ChatBox
