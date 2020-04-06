import React from "react"

const TroubleshootingGuide = () => (
  <div>
    <h2 id="troubleshooting-guide">
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
      Troubleshooting Guide
    </h2>
    <p>
      The troubleshooting guide is classified into four sections:{" "}
      <strong>Main Controller</strong>, <strong>Cells</strong>, <strong>Apps</strong>, and <strong>Frequently Asked Questions</strong>.
    </p>
    <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
              Issues
            </th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100" style={{textAlign: 'right'}}>
              Solutions
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr>
            <td colspan="2" className="text-sm font-semibold text-gray-500 p-2 bg-gray-200"><center>Main Controller</center></td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              <span className="font-louis">louis</span> is not responding to my voice commands
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Voice commands work best in a quiet area with little external noise
              (such as other people, televisions, air-conditioning units),
              and when you speak slowly and clearly.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              Speech output is muffled
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Ensure that the speaker for speech output has not been covered.
              The speaker is located on the top of the main controller (see diagram in section TODO).
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              The volume is too low or too loud
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Use the voice commands, <span className="italic underline">increase volume</span>{" "}
              and <span className="italic underline">decrease volume</span>,
              to adjust the loudness of the speech output that suits you.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              <span className="font-louis">louis</span> is not responding at all
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Ensure that <span className="font-louis">louis</span> has been powered on,
              using the switch on the left of the main controller (see diagram in section TODO).
              If <span className="font-louis">louis</span> still fails to respond, it may be out
              of power and need charging. Connect the power cable to louis as described in section TODO.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              <span className="font-louis">louis</span> isn’t connecting to my WiFi network
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Try restarting <span className="font-louis">louis</span> then perform the WiFi connection instructions again.
              If the problem persists, try restarting your WiFi router or contacting your internet provider.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              The battery is not charging or is taking longer to charge than expected.
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Make sure you are using the charger supplied with the device.
              If the battery is charging, the LED indicator glows red.
            </td>
          </tr>
          <tr>
            <td colspan="2" className="text-sm font-semibold text-gray-500 p-2 bg-gray-200"><center>Cells</center></td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              A cell is not working or only working intermittently
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Check the connection between the cell and the rest of <span className="font-louis">louis</span> by disconnecting
              and reconnecting the cell. In rare occasions, you may also need to clean the contacts on the cell - the process
              for doing this is described in the Maintenance section (TODO).
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              A cell is producing the wrong braille output
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              To calibrate a cell, please follow the instructions in the “Calibrating a Cell’s Output” subsection in the “Maintenance” section (TODO).
            </td>
          </tr>
          <tr>
            <td colspan="2" className="text-sm font-semibold text-gray-500 p-2 bg-gray-200"><center>Apps</center></td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              I don't know how to use an app
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Whilst inside an app, use the voice command <span className="italic underline">instructions</span> or <span className="italic underline">help</span> to hear a guide on how to use the app.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              An app won’t open or shut down unexpectedly
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Try restarting <span className="font-louis">louis</span>, if the problem persists uninstall it in the settings menu,
              then it will be reinstalled automatically.
            </td>
          </tr>
          <tr>
            <td colspan="2" className="text-sm font-semibold text-gray-500 p-2 bg-gray-200"><center>Frequently Asked Questions</center></td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              Can <span className="font-louis">louis</span> work without access to the internet?
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Yes, if you don’t have internet access, the core features of <span className="font-louis">louis</span> will continue to work as normal.<br /><br />
              However, some apps require access to the internet in order to operate fully or at all, and these apps will therefore
              not work without an internet connection.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              How do I install additional apps?
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              You don’t have to at this time, the new apps are installed automatically when <span className="font-louis">louis</span> is connected on the internet.
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              Can <span className="font-louis">louis</span> support languages other than English?
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              At this time, English is the only supported language. We welcome feedback as to which other languages our users would like to see supported!
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              What’s the limit of the number of cells you can add?
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
            Currently louis supports a maximum of 255 cells. We’re always interested to hear the ways in which our customers are using{" "}
            <span className="font-louis">louis</span> - if this is a barrier, please reach out to us!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      If you find any unexpected issues with <span className="font-louis">louis</span> or you are unable to diagnose it using the above troubleshooting guide,
      please don’t hesitate to contact our Technical Support for technical assistance at <a href={"mailto:louisHelp@threedots.com"}>louisHelp@threedots.com</a></p>
  </div>
)

export default TroubleshootingGuide
