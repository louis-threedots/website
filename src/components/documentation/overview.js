import React from "react"

const Overview = () => (
  <div>
    <h2 id="overview">
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
      Overview
    </h2>
    <h3 id="introduction">Introduction</h3>
    <p>
      Thank you for choosing <span className="font-louis">louis</span>, the
      brailliant assistant. <span className="font-louis">louis</span> is an
      assistive braille learning device that uses interactive apps, games and
      quizzes to make learning braille fun!{" "}
      <span className="font-louis">louis</span> is designed to suit braille
      learners of all ages and ability. In a few simple steps you will be able
      to begin learning braille in a way that suits you, enabling you to take
      advantage of the many aspects of the world that require braille literacy.
    </p>
    <h4 id="audio-described-user-guide">Audio Described User Guide</h4>
    <p>
      We understand the irony of providing a printed user guide for a product
      intended to teach braille. For that reason, once{" "}
      <span className="font-louis">louis</span> is set up, use the voice command{" "}
      <span className="italic underline">user guide</span> to access an
      interactive, audio version of this user guide.
    </p>
    <h4 id="whats-included">What's Included?</h4>
    <p>Inside the box you will find the following main components:</p>
    TODO
    <p>You should also find the following accessories:</p>
    <table style="table-layout: fixed " width="600px">
      <tr>
        <td><img style="width: 100%" src="https://raw.githubusercontent.com/louis-threedots/website/master/src/images/guide.png" /></td>
        <td><img style="width: 100%" src="https://raw.githubusercontent.com/louis-threedots/website/master/src/images/cable.png" /></td>
        <td><img style="width: 100%" src="https://raw.githubusercontent.com/louis-threedots/website/master/src/images/license.png" /></td>
        <td><img style="width: 100%" src="https://raw.githubusercontent.com/louis-threedots/website/master/src/images/legal.png" /></td>
      </tr>
      <tr>
        <td><p style="padding: 10px" >This user guide</p></td>
        <td><p style="padding: 10px" >A UK-mains charging cable</p></td>
        <td><p style="padding: 10px" >Software licences</p></td>
        <td><p style="padding: 10px" >Warrenty and disposal information</p></td>
      </tr>
    </table>
    <h3 id="the-main-controller">The Main Controller</h3>
    {
      "<labelled diagram of the main controller showing features described below TODO>"
    }
    <p>
      The controller is the brains of <span className="font-louis">louis</span>:
      all the other parts connect to and interface with it. It should be
      positioned such that TODO.
    </p>
    <p>
      On the top of the controller there is a grille for the speaker and
      microphone. The speaker and microphone will be the main way you interact
      with <span className="font-louis">louis</span> whilst you learn braille.
      On the left you will find a power switch. On the back there is a charging
      port which the charging cable can be attached to. On the right there is a
      cell port to which refreshable cells can be attached.
    </p>
    <h3 id="refreshable-cells">Refreshable Cells</h3>
    {"<labelled diagram of a cell showing features described below TODO>"}
    <p>
      Cells are the way that you learn braille with{" "}
      <span className="font-louis">louis</span>. Each cell contains a
      refreshable output of a single braille character, and an input button. On
      the side it contains connection ports, allowing the cell to be connected
      to the main controller, and multiple cells to be chained together. The
      cell should be positioned such that the refreshable output and button are
      facing upwards, with the button above the refreshable cell.
    </p>
    <p>
      Modularity is one of the core concepts of{" "}
      <span className="font-louis">louis</span>, enabling you to add more cells
      to <span className="font-louis">louis</span> as your learning progresses.
      Each cell is identical, they can be chained together in any order provided
      that the controller is connected to the left-most cell.
    </p>
    <h3 id="interacting-with-louis">
      Interacting with <span className="font-louis">louis</span>
    </h3>
    <h4 id="audio-speech-output">Audio Speech Output</h4>
    <p>
      When <span className="font-louis">louis</span> wants to tell you
      something, whether that be a navigation option, your current progress, or
      the instructions for a specific app, it will do so by speaking to you
      through the audio speech output. This uses the speaker built-in to the
      controller.
    </p>
    <h4 id="audio-speech-input">Audio Speech Input</h4>
    <p>
      When you want to tell <span className="font-louis">louis</span> something,
      whether that be an answer in response to a question posed by an app or a
      request for a new app to be launched, you will do so by speaking the
      phrase. There is a microphone inside the main controller that will
      understand what you have said. Note that you do not need to bend over and
      speak into the main controller, the microphone has been calibrated to work
      with you positioned normally in front of{" "}
      <span className="font-louis">louis</span>.
    </p>
    <h4 id="braille-output-through-the-cells">
      Braille Output Through the Cells
    </h4>
    <p>
      When an app wants to output one or more braille characters, it will do so
      using the cells connected to the right of the main controller. You will
      then be able to read the character by placing your finger through the
      reading window on the cell and feeling the raised dots.
    </p>
    <h4 id="selection-of-a-particular-cell">Selection of a Particular Cell</h4>
    <p>
      If you need to select a specific cell, for instance if{" "}
      {"<example of why you would need to select a specific cell TODO>"}, then
      you can do so by pressing the button above the reading window on the
      desired cell.
    </p>
  </div>
)

export default Overview
