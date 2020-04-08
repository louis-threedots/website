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
        title="Sending Output to Cells"
        steps={[
          { image: "main_controller_tx.svg", description: "The Main Controller wishes to send a message to Cell 3. (For example, to tell it to output a specific Braille character). Since there is no direct connection between the Main Controller and Cell 3, the Main Controller must first send the message to Cell 1." },
          { image: "cell_1_tx.svg", description: "Cell 1 receives the message from the Main Controller. It looks at the message header, which identifies the cell that the message is intended for. Since the destination cell is Cell 3, and not Cell 1, Cell 1 sends the message to Cell 2." },
          { image: "cell_2_tx.svg", description: "Cell 2 receives the message from the Cell 1. Like Cell 1, it looks at the message header and sees that the destination cell is Cell 3, and not Cell 2. Therefore Cell 2 sends the message to Cell 3." },
          { image: "cell_3_action.svg", description: "Cell 3 receives the message from Cell 2. Upon reading the message header, it sees that it is the indented recipient of the message. Therefore the cell does not forward on the message, and instead reads its contents and acts on it, for example by outputting a specific Braille character." },
        ]}
      />
      <FirmwareSimulator
        title="Receiving Input from Cells"
        steps={[
          { image: "cell_1_rx.svg", description: "Assume that the button on Cell 2 has been pressed. Cell 2 now needs to alert the Main Controller that this event has occurred. Since there is no direct connection between the Cell 2 and the Main Controller, Cell 2 first sends the message to Cell 1." },
          { image: "main_controller_rx.svg", description: "Cell 1 receives the message from Cell 2. It looks at the message header, which identifies who the message is intended for. Since this destination cell is the Main Controller and not Cell 1, Cell 1 forwards the message to the Main Controller." },
          { image: "main_controller_action.svg", description: "The Main Controller receives the message from Cell 1. Upon reading the message header, it sees that it is the indented recipient of the message. The Main Controller now acts upon the contents of the message, in this instance by informing the currently-running app that the button on Cell 2 has been pressed." },
        ]}
      />
      <FirmwareSimulator
        title="Discovering All Connected Cells"
        steps={[
          { image: "main_controller_tx.svg", description: "The Main Controller sends a message to Cell 1. The payload of the message tells Cell 1 to identify itself as cell number 1, and to continue the discovery process." },
          { image: "cell_1_rx.svg", description: "Cell 1 receives the message from the Main Controller. Upon reading the payload, Cell 1 updates its internal state to reflect the fact that it is now Cell 1. Cell 1 then replies to the Main Controller, acknowledging that it received the message." },
          { image: "cell_1_tx.svg", description: "Cell 1 sends a message to the next cell along, asking it to identify itself as cell number 2, and to continue the discovery process. Cell 1 identifies the next cell along as number 2 by adding 1 to it's internal cell number, which results in 2." },
          { image: "cell_1_rx.svg", description: "Cell 2 receives the message from Cell 1. Upon reading the payload, Cell 2 updates its internal state to reflect the fact that it is now Cell 2. Cell 2 then replies to Cell 1, acknowledging that it received the message." },
          { image: "cell_2_tx.svg", description: "Cell 2 sends a message to the next cell along, asking it to identify itself as cell number 3, and to continue the discovery process." },
          { image: "cell_2_rx.svg", description: "Cell 3 receives the message from Cell 2. Upon reading the payload, Cell 3 updates its internal state to reflect the fact that it is now Cell 3. Cell 3 then replies to Cell 2, acknowledging that it received the message." },
          { image: "cell_3_tx.svg", description: "Cell 3 sends a message to the next cell along, asking it to identify itself as cell number 3, and to continue the discovery process. It must do this even though there are no more cells connected, because Cell 3 has no way of knowing that there are no more cells connected without asking first." },
          { image: "cell_3_no_rx.svg", description: "Cell 3 waits for an acknowledgement message from the next cell along. Since there are no more cells connected, no acknowledgement message is received. After a timeout, Cell 3 determines that it must be the last cell connected, and since it is cell number 3, that means there are a total of 3 cells connected." },
          { image: "main_controller_action.svg", description: "Cell 3 sends a message to the Main Controller, notifying it that there are a total of 3 cells connected. It does this using the same process outlined in <i>Receiving Input from Cells</i>" },
        ]}
      />
    </div>
  </>
)

export default HowItWorks
