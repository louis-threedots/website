import React from "react"

const Installation = () => (
  <div>
    <h2 id="installation">Installation</h2>
    <h3 id="setup-the-hardware">Setup the Hardware</h3>
    <p>
      Place the main controller in a way such that the button is on the left
      side. You can distinguish the top of the controller, by feeling a path on
      your finger. To connect a cell on the controller, push it on the right
      side of the controller, until you hear them “click”. For a cell to be
      correctly aligned, you need to feel the button above the braille pins. To
      connect subsequent cells, follow the same process.
    </p>
    <h3 id="setup-the-software">Setup the Software</h3>
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
