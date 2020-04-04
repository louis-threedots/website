import React from "react"

const Overview = () => (
  <div>
    <h2 id="overview">Overview</h2>
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
    TODO
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
