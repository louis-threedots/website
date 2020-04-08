import React from "react"
import FirmwareSimulator from "../components/firmwareSimulator"
import SEO from "../components/seo"

const HowItWorks = () => (
  <>
    <SEO title="How it Works" />
    How it Works Page
    <div>
      <h3>Firmware</h3>
      <FirmwareSimulator
        steps={[
          { image: "main_controller_tx.svg", description: "The Main Controller wishes to send a message to Cell 3. (For example, to tell it to output a specific Braille character). Since there is no direct connection between the Main Controller and Cell 3, the Main Controller must first send the message to Cell 1." },
          { image: "cell_1_tx.svg", description: "Cell 1 receives the message from the Main Controller. It looks at the message header, which identifies the cell that the message is intended for. Since the destination cell is Cell 3, and not Cell 1, Cell 1 sends the message to Cell 2." },
          { image: "cell_2_tx.svg", description: "Cell 2 receives the message from the Cell 1. Like Cell 1, it looks at the message header and sees that the destination cell is Cell 3, and not Cell 2. Therefore Cell 2 sends the message to Cell 3." },
          { image: "cell_3_action.svg", description: "Cell 3 receives the message from Cell 2. Upon reading the message header, it sees that it is the indented recipient of the message. Therefore the cell does not forward on the message, and instead reads its contents and acts on it, for example by outputting a specific Braille character." },
        ]}
      />
    </div>
  </>
)

export default HowItWorks
