import React from "react"

const Maintenance = () => (
  <div>
    <h2 id="maintenance">Maintenance</h2>
    <h3 id="cleaning-louis">Cleaning <span className="font-louis">louis</span></h3>
    <p>
      <span className="font-louis">louis</span> is surface washable, and can be cleaned with a cloth dampened with warm water.
      Please do not use abrasive chemicals such as bleach or certain cleaning products. Ensure <span className="font-louis">louis</span>{" "}
      is completely turned off, then wipe down the sides of the main controller and cells. The rotating discs in each cell can be cleaned by
      using the inbuilt Clean app. This will cause the disks in all cells to rotate continuously until the app is quit, allowing the disks to be cleaned.
    </p>
    <h3 id="cleaning-connectors">Cleaning the Connectors</h3>
    <p>
      To clean the connectors on the sides of the cells and main controller, use a can of compressed air (if available)
      to blow dirt out from the connecting pins and connectors. If no compressed air is available, use a soft brush to
      brush the contacts clean. Do not use a brush with wire bristles or other forms of hard brush as this can damage the connections.
    </p>
    <h3 id="replacing-battery">Replacing the Battery</h3>
    <p>
      The battery contained inside <span className="font-louis">louis</span> is rechargeable so should not need to be replaced, only recharged when it runs low.
      However, over some years the performance of the battery will decrease, this is to be expected and occurs with all
      rechargeable batteries. The battery, as with all components in <span className="font-louis">louis</span>, is a non-user serviceable part.
    </p>
    <p>
      At the time of writing this user guide, we do not offer battery replacement service. However,
      this is something we are continually considering, so please check our website for the latest information.
      In absence of a battery replacement service, when the battery performance has degraded beyond the point of use,
      we recommend taking <span className="font-louis">louis</span> your local electronics recycling centre.
    </p>
    <p>
      At the current time ThreeDots is not a member of the WEEE Distributor Take Back Scheme,
      and therefore we offer to recycle louis for you at no charge. Contact us for more information.
    </p>
    <h3 id="calibrating-cell">Calibrating a Cell’s Output</h3>
    <p>
      In rare occasions, the braille output displayed on a cell may become uncalibrated, meaning it does not display the correct output.
      This can be solved using the inbuilt Calibration app. To manually recalibrate a cell follow these steps:
    </p>
    <p>
      <ol>
        <li>Disconnect all non-faulty cells, so that only the faulty cell is connected to the main controller.</li>
        <li>Open the Calibration app.</li>
        <li>Place your hand on the cell output.</li>
        <li>Press the cell button until the reading window outputs a space character (i.e.: a flat surface with no raised dots).</li>
        <li>Say <span className="italic underline">exit</span> or <span className="italic underline">quit</span> to finish the calibration.</li>
      </ol>
    </p>
    <p>
      If a cell is becoming regularly uncalibrated, this may be due to a fault with the cell.
      If the cell is still under warranty, please contact us to arrange a replacement.
    </p>
  </div>
)

export default Maintenance
