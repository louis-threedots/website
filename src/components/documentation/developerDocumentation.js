import React from "react"

const DeveloperDocumentation = () => (
  <div>
    <h2 id="developer-documentation">
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
      Developer Documentation
    </h2>
    <p>
      To build your own app, create a new python class that inherits from{" "}
      <code>App</code>. When your class is instantiated by the app loader on the
      braille device, you will have access to useful instance variables and
      methods that allow you to design your very own app flow.
    </p>
    <p>
      For ease of development, the code is portable between the Raspberry Pi
      with Arduino PCBs (which the braille device works with) and computer-only
      testing. Thus you are not required to have a device in order to build your
      own apps. You can switch to Python terminal interaction by setting the
      variable <code>main_cell</code> to <code>comp</code> instead of{" "}
      <code>arduino</code> in the file{" "}
      <code>src/app_states/main_state.txt</code>. You can run{" "}
      <code>python3 src/main.py</code> once you have installed all the packages{" "}
      <span className="font-louis">louis</span> depends on, which can be found
      in the <code>requirements.txt</code> file. The terminal will prompt you
      for the number of cells you want to work with, and when relevant, prompt
      you for the button cell index you want to press.
    </p>
    <p>
      Additional tools for development are the <code>output_audio</code> and{" "}
      <code>input_speech</code>
      variables also found in <code>src/app_states/main_state.txt</code>. You
      can turn on and turn off audio output by setting <code>output_audio</code>{" "}
      to <code>true</code>
      and <code>false</code>, respectively. The output will always be printed to
      the terminal. You can turn on and turn off speech input by setting
      <code>input_speech</code> to <code>true</code> and <code>false</code>,
      respectively. When turned off, the ‘voice’ commands can be given through
      the terminal instead.
    </p>
    <h3 id="cell">
      <code>Cell</code>
    </h3>
    <p>
      The constructor of <code>App</code> is passed an array of{" "}
      <code>Cell</code> objects, whose dynamic length is automatically
      determined by the number of physical cells that are attached to the
      braille device (modularity). <code>Cell</code> contains methods that allow
      you to interact with a specific braille cell without having to deal with
      the low-level hardware code.
    </p>
    <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
              Method
            </th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              print_character(char letter)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Prints a given character onto a braille cell.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              wait_for_button_press()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Waits and returns True when the user presses the button on the
              cell.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              reset()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Resets the cell to zero, i.e. flat surface.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 id="audio">
      <code>Audio</code>
    </h3>
    <p>
      Your app receives an instance of <code>Audio</code> which provides methods
      to interact with the microphone and speakers, as well as utilities for
      speech recognition and synthesis. These functions are essential for the
      user experience as blind users starting to learn braille heavily rely on
      audio.
    </p>
    <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
              Method
            </th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              speak(string text)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Output the given text string to the speakers using Google Cloud
              Speech API.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              playsound(string filename)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Output the contents of a digital audio file to the speakers, for
              audio output other than text strings.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              recognize_speech([string] keywords)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Listens for audio input and returns a string of the transcribed
              speech. Optional relevant keywords can be passed in order to
              improve recognition accuracy.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      If you would like the Audio output to be your own mp3 recording, upload
      the file in the cache folder with the md5 hash of the output as filename.
    </p>
    <h3 id="direct">
      <code>Direct</code>
    </h3>
    <p>
      The instance of your created class also contains a variety of inherited
      utility functions.
    </p>
    <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
              Method
            </th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              print_text(string text)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Displays a given text over all available cells and implements
              pagination using the button of the last cell.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              print_character_all_cells(char c)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Displays the same given character on all available cells.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              print_cells_to_terminal()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Development helper function that prints the current output on the
              cells to the terminal, including the normal alphabet character
              underneath the braille cells.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              print_character_all_cells(char c)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Displays the same given character on all available cells.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              on_start()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              This is an abstract method that is called on the launch of your
              app and needs to be implemented in your class.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              on_quit()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              This is an abstract method that is called when your app is quit
              and needs to be implemented in your class.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              reset_cells()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Resets all cells to zero, i.e. flat surface.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              await_response(string[] desired_responses)
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Listens for audio input, waits for one of the desired responses to
              be said and returns that option.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              save_settings()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Saves the settings of your app to the local file system.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 font-mono text-xs text-purple-700">
              edit_settings()
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Provides the user with options to change the editable app
              settings. The menu can be accessed by the user with the voice
              command <span className="italic underline">help</span> at any
              point.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      <code>self.settings</code> contains a dictionary of previously stored app
      settings from the file system. You can add the settings you need for your
      app to the file <code>[appname]_state.txt</code> in the{" "}
      <code>app_states</code> folder. If the setting is user-editable, create a
      key “editable” which is a dictionary containing the editable settings.
      Provide a name, description, current value and a dictionary of possible
      values with their description.
    </p>
  </div>
)

export default DeveloperDocumentation
