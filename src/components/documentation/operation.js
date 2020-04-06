import React from "react"

const Operation = () => (
  <div>
    <h2 id="operation">Operation</h2>
    <p>TODO</p>
    <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
              Voice Command
            </th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs italic underline">
              exit
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs italic underline">
              settings
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs italic underline">
              help
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>TODO</p>
    <h3 id="general">General</h3>
    <p>
      You can find the charging port below the on/off switch on the main
      controller. Insert the charging cable to recharge the battery of{" "}
      <span className="font-louis">louis</span>. <strong>Important</strong>: you
      do not need to charge the cells, only the main controller.
    </p>
    <p>
      To turn <span className="font-louis">louis</span> on, press the on off
      switch on the left side of the main controller. To turn off, press the
      switch again. Once <span className="font-louis">louis</span> is switched
      on, you will hear the welcoming message: TODO.
    </p>
    <h3 id="open-an-application">Open an Application</h3>
    <p>
      You are now in the main menu and will then hear the phrase: ‘You can now
      open any application using voice command’. You can open any application of{" "}
      <span className="font-louis">louis</span> you want using the keyword{" "}
      <span className="italic underline">open</span> and the name of the
      application you wish to open. For example, let’s say you wish to open the
      Learn app. You would use the phrase{" "}
      <span className="italic underline">open Learn</span> in order to do that.
    </p>
    <h3 id="close-an-application">Close an Application</h3>
    <p>
      To exit an app back to the main menu, you need to use either one of the
      keywords <span className="italic underline">exit</span> or{" "}
      <span className="italic underline">quit</span>. Thus if you are in the
      Settings app and wish to close it, you would say{" "}
      <span className="italic underline">exit</span> or{" "}
      <span className="italic underline">quit</span> to go back to the main
      menu.
    </p>
    <h3 id="help">Help</h3>
    <p>
      While in the main menu, you can hear the list of apps installed, by saying{" "}
      <span className="italic underline">options</span>. If you are in the main
      menu and wish to hear instructions of how to navigate{" "}
      <span className="font-louis">louis</span>, you need to say{" "}
      <span className="italic underline">instructions/help</span>. This would
      read the instructions for you.
    </p>
    <p>
      If you have opened an app, it will ask you whether you would like to hear
      the instructions for that app. If at any point you wish to hear the
      instructions for an app, you can say the word{" "}
      <span className="italic underline">instructions/help</span>.
    </p>
    <p>
      TODO To hear general instructions : help. To hear ap instructions: help
      while in app? -> I will implement this. We already have that you can say
      ‘options’ at any point which will give you a list of voice command options
      (like next, previous, or in the main app ‘open learn’, ‘open tutor’ etc.).
    </p>
    <h3 id="pagination">Pagination</h3>
    <p>
      If you are using an app that requires you to read multiple words and even
      lines of a text, you can scroll to the next word by pressing the button on
      the last cell. If you wish to move to the previous word, then press the
      button of the first cell.
    </p>
    <h3 id="contractions">Contractions</h3>
    <p>
      You can enable or disable contractions by opening the settings menu while
      in the main menu, by saying{" "}
      <span className="italic underline">settings</span>. Then it will ask you
      which setting you want to change, to which you should say{" "}
      <span className="italic underline">contractions</span>. Then you can
      either say <span className="italic underline">enable contractions</span>{" "}
      or <span className="italic underline">disable contractions</span>.
    </p>
  </div>
)

export default Operation
