import React from "react"

const TroubleshootingGuide = () => (
  <div>
    <h2 id="troubleshooting-guide">Troubleshooting Guide</h2>
    <p>
      The troubleshooting guide is classified into four sections:{" "}
      <strong>Main Controller</strong>, <strong>Cells</strong>, <strong>Apps</strong>, and <strong>FAQ</strong>.
    </p>
    <div className="my-6 border-t border-b border-gray-300 overflow-hidden relative">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100 w-2/5">
              Issues
            </th>
            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">
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
              Lectus a sapien metus erat inceptos ultrices
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
          </tr>
          <tr>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
            <td className="p-2 border-t border-gray-300 text-xs">
              Lectus a sapien metus erat inceptos ultrices
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>TODO</p>
  </div>
)

export default TroubleshootingGuide
