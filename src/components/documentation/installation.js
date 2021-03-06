import React from "react"
import useAudio from "../useAudio"

const Installation = () => {
  const { start } = useAudio("/installation.mp3")

  return (
    <div>
      <h2 id="installation">
        <button
          className="text-gray-500 hover:text-indigo-700 duration-150 ease-in-out transition cursor-pointer no-underline -ml-10 absolute pr-4"
          aria-label="Read aloud"
          onClick={start}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        Installation
      </h2>
      <h3 id="setup-the-hardware">Set up the Hardware</h3>
      <p>
        Place the main controller in a way such that the on/off button and
        charging port is on the left side. You can distinguish the top of the
        controller, by feeling the microphone and speaker on your finger, while
        the bottom has just a smooth surface. To connect a cell on the
        controller, push it on the right side of the controller, until you hear
        them “click”. For a cell to be correctly aligned, you need to feel the
        button above the braille pins. To connect subsequent cells, follow the
        same process.
      </p>
      <h3 id="setup-the-software">Set up the Software</h3>
      <p>
        If it is your first time to start{" "}
        <span className="font-louis">louis</span> or if{" "}
        <span className="font-louis">louis</span> is not connected to the
        internet, <span className="font-louis">louis</span> will automatically
        create a WiFi network called
        <code>louis</code>.
      </p>
      <ol>
        <li>
          Using another device, such as your phone, tablet, or laptop, connect
          to
          <code>louis</code> WiFi network as you normally connect to other WiFi
          networks.
        </li>
        <li>
          Once you have successfully connected to the <code>louis</code> WiFi
          network, start up a web-browser on your device. Your web-browser will
          be redirected to the WiFi networks page with networks to which louis
          can connect.
        </li>
        <li>Select a WiFi network you want to connect to.</li>
        <li>Enter password and click connect button.</li>
        <li>
          Once you have successfully logged in,{" "}
          <span className="font-louis">louis</span> will have access to the
          internet and will stop sharing <code>louis</code> WiFi network.
        </li>
      </ol>
    </div>
  )
}

export default Installation
