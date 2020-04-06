import React from "react"

const Installation = () => (
  <div>
    <h2 id="installation">
      <div
        className="text-gray-500 hover:text-indigo-700 duration-150 ease-in-out transition cursor-pointer no-underline -ml-10 absolute pr-4"
        href="#"
      >
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      Installation
    </h2>
    <h3 id="setup-the-hardware">Set up the Hardware</h3>
    <p>
      Place the main controller in a way such that the on/off button and charging port is on the left
      side. You can distinguish the top of the controller, by feeling the microphone and speaker on
      your finger, while the bottom has just a smooth surface. To connect a cell on the controller, push it on the right
      side of the controller, until you hear them “click”. For a cell to be
      correctly aligned, you need to feel the button above the braille pins. To
      connect subsequent cells, follow the same process.
    </p>
    <h3 id="setup-the-software">Set up the Software</h3>
    TODO
    <p>
      - Talk about the wifi and anything else needed.
      <br />- Need to connect it to the internet somehow? Or we pretend that the
      speech recognition is done offline (which we can reasonably claim since
      there are offline versions available), but I would mention that no
      internet connection is necessary just because otherwise they might
      complain about it. TODO EDIT: actually we need internet connection for the
      Headlines app.
    </p>
  </div>
)

export default Installation
