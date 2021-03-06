import React from "react"
import useAudio from "../useAudio"

const Operation = () => {
  const { start } = useAudio("/operation.mp3")

  return (
    <div>
      <h2 id="operation">
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
        Operation
      </h2>
      <h3 id="general-commands">General Commands</h3>
      <p>
        There are several voice commands that can be used both in the main menu
        and in all apps, and can be used at any point:
      </p>
      <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-1/5">
                Voice Command
              </th>
              <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
                Behaviour in Main Menu
              </th>
              <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
                Behaviour in Apps
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            <tr>
              <td className="p-2 border-t border-gray-300 text-xs">
                <span className="italic underline">help</span> or{" "}
                <span className="italic underline">instructions</span>
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Hear instructions of how to navigate{" "}
                <span className="font-louis">louis</span>, including this list
                of general voice commands.
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Hear more information about what the app is and how it works,
                including the app-specific navigation instructions.
              </td>
            </tr>
            <tr>
              <td className="p-2 border-t border-gray-300 text-xs">
                <span className="italic underline">quit</span> or{" "}
                <span className="italic underline">exit</span>
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Switch off <span className="font-louis">louis</span> after
                confirmation. All settings will be saved.
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Return from the app back to the main menu after confirmation.
                The app state will be saved.
                <div className="text-purple-700">
                  <i>Example</i>: if you are in the Learn app and wish to close
                  it, you would say{" "}
                  <span className="italic underline">exit</span> or{" "}
                  <span className="italic underline">quit</span> to go back to
                  the main menu.
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-t border-gray-300 text-xs italic underline">
                options
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Hear a list of voice command options. In the main menu, this
                gives you the list of apps installed.
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Hear a list of voice command options. In apps, this will give
                you the specific commands you can give in the app at that
                moment.
                <div className="text-purple-700">
                  <i>Example</i>: if a yes-no question has just been asked, it
                  will return the options{" "}
                  <span className="italic underline">yes</span> and{" "}
                  <span className="italic underline">no</span>.
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-2 border-t border-gray-300 text-xs italic underline">
                settings
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Open the settings menu to change the device-wide editable
                settings.
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Open the settings menu to change the app-specific editable
                settings.
              </td>
            </tr>
            <tr>
              <td className="p-2 border-t border-gray-300 text-xs italic underline">
                open
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                Open any application of{" "}
                <span className="font-louis">louis</span> you want, using the
                keyword <span className="italic underline">open</span> and the
                name of the application you wish to open.
                <div className="text-purple-700">
                  <i>Example</i>: let’s say you wish to open the Learn app. You
                  would use the phrase{" "}
                  <span className="italic underline">open Learn</span> in order
                  to do that.
                </div>
              </td>
              <td className="p-2 border-t border-gray-300 text-xs">
                <i>- Not Applicable -</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="charge-louis">
        Charge <span className="font-louis">louis</span>
      </h3>
      <p>
        Once you hear the phrase: "low battery", then that means that{" "}
        <span className="font-louis">louis</span> needs recharging. You can find
        the charging port beside the on/off switch on the main controller.
        Insert the charging cable to recharge the battery of{" "}
        <span className="font-louis">louis</span>. <strong>Important</strong>:
        you do not need to charge the cells, only the main controller.
      </p>
      <h3 id="switch-on">Switch on</h3>
      <p>
        To turn <span className="font-louis">louis</span> on, press the on/off
        button on the left side of the main controller. Once{" "}
        <span className="font-louis">louis</span> is switched on, you will hear
        the welcoming message: "Welcome to{" "}
        <span className="font-louis">louis</span> the brailliant assistant."
      </p>
      <p>
        If this is your first time opening{" "}
        <span className="font-louis">louis</span>, then you will also hear:
      </p>
      <blockquote>
        You can get more information and instructions by saying{" "}
        <span className="underline">help</span>.<br />
        You can quit <span className="font-louis">louis</span> and apps at any
        time by saying <span className="underline">quit</span> or{" "}
        <span className="underline">exit</span>.<br />
        You can hear your voice command options by saying{" "}
        <span className="underline">options</span>.<br />
        You can change settings by saying{" "}
        <span className="underline">settings</span>.
      </blockquote>
      <h3 id="switch-off">Switch off</h3>
      <p>
        To turn off, simply press the on/off button while{" "}
        <span className="font-louis">louis</span> is on. You can also switch off{" "}
        <span className="font-louis">louis</span> by saying{" "}
        <span className="italic underline">quit</span> or{" "}
        <span className="italic underline">exit</span> when in the main menu.
      </p>
      <h3 id="open-an-application">Open an Application</h3>
      <p>
        When you are in the main menu, you will hear the phrase: "You can now
        open any application using voice command". You can then open any
        application of <span className="font-louis">louis</span> you want using
        the keyword <span className="italic underline">open</span> and the name
        of the application you wish to open. For example, let’s say you wish to
        open the Learn app. You would use the phrase{" "}
        <span className="italic underline">open Learn</span> in order to do
        that.
      </p>
      <h3 id="exit-an-application">Exit an Application</h3>
      <p>
        To exit an app back to the main menu, you need to use either one of the
        keywords <span className="italic underline">exit</span> or{" "}
        <span className="italic underline">quit</span>. Thus if you are in the
        Learn app and wish to close it, you would say{" "}
        <span className="italic underline">exit</span> or{" "}
        <span className="italic underline">quit</span> to go back to the main
        menu.
      </p>
      <h3 id="install-an-application">Install an Application</h3>
      <p>
        All applications will be downloaded to your device automatically while
        you have an internet connection.
      </p>
      <h3 id="help">Help</h3>
      <p>
        You can hear your voice command options by saying{" "}
        <span className="italic underline">options</span>. While in the main
        menu, <span className="italic underline">options</span> will give you
        the list of apps installed. In a specific app,{" "}
        <span className="italic underline">options</span> will give you the
        specific commands you can execute in the app.
      </p>
      <p>
        If you are in the main menu and wish to hear instructions of how to
        navigate <span className="font-louis">louis</span>, you need to say{" "}
        <span className="italic underline">instructions</span> or{" "}
        <span className="italic underline">help</span>. This would read the
        instructions for you. If at any point you wish to hear the instructions
        for a specific app, you can do that by saying the word{" "}
        <span className="italic underline">instructions</span> or{" "}
        <span className="italic underline">help</span> while in the app.
      </p>
      <h3 id="pagination">Pagination</h3>
      <p>
        If you are using an app that requires you to read multiple words or
        lines of a text, you can scroll to the next line by pressing the button
        on the last cell. If you wish to move to the previous line, then press
        the button of the first cell.
      </p>
      <h3 id="contractions">Contractions</h3>
      <p>
        You can enable or disable contractions by opening the settings menu
        while in the main menu, by saying{" "}
        <span className="italic underline">settings</span>. Then it will ask you
        which setting you want to change, to which you should say{" "}
        <span className="italic underline">contractions</span>. Then you can
        either say <span className="italic underline">enable contractions</span>{" "}
        or <span className="italic underline">disable contractions</span>.
      </p>
    </div>
  )
}

export default Operation
