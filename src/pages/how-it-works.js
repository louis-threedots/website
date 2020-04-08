import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import FirmwareSimulator from "../components/firmwareSimulator"
import SEO from "../components/seo"

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query {
      main_controller_tx: file(relativePath: { eq: "main_controller_tx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      main_controller_rx: file(relativePath: { eq: "main_controller_rx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      main_controller_action: file(
        relativePath: { eq: "main_controller_action.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_1_tx: file(relativePath: { eq: "cell_1_tx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_1_rx: file(relativePath: { eq: "cell_1_rx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_2_tx: file(relativePath: { eq: "cell_2_tx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_2_rx: file(relativePath: { eq: "cell_2_rx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_3_tx: file(relativePath: { eq: "cell_3_tx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_3_no_rx: file(relativePath: { eq: "cell_3_no_rx.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cell_3_action: file(relativePath: { eq: "cell_3_action.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="How it Works" />

      <Link
        to="/lab-book"
        className="absolute top-5 right-5 w-48 flex items-center justify-center  py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        Lab Book
      </Link>

      <div>
        <h3>Firmware</h3>
        <FirmwareSimulator
          title="Sending Output to Cells"
          steps={[
            {
              image: (
                <Image fluid={data.main_controller_tx.childImageSharp.fluid} />
              ),
              description:
                "The Main Controller wishes to send a message to Cell 3. (For example, to tell it to output a specific Braille character). Since there is no direct connection between the Main Controller and Cell 3, the Main Controller must first send the message to Cell 1.",
            },
            {
              image: <Image fluid={data.cell_1_tx.childImageSharp.fluid} />,
              description:
                "Cell 1 receives the message from the Main Controller. It looks at the message header, which identifies the cell that the message is intended for. Since the destination cell is Cell 3, and not Cell 1, Cell 1 sends the message to Cell 2.",
            },
            {
              image: <Image fluid={data.cell_2_tx.childImageSharp.fluid} />,
              description:
                "Cell 2 receives the message from the Cell 1. Like Cell 1, it looks at the message header and sees that the destination cell is Cell 3, and not Cell 2. Therefore Cell 2 sends the message to Cell 3.",
            },
            {
              image: <Image fluid={data.cell_3_action.childImageSharp.fluid} />,
              description:
                "Cell 3 receives the message from Cell 2. Upon reading the message header, it sees that it is the indented recipient of the message. Therefore the cell does not forward on the message, and instead reads its contents and acts on it, for example by outputting a specific Braille character.",
            },
          ]}
        />
        <FirmwareSimulator
          title="Receiving Input from Cells"
          steps={[
            {
              image: <Image fluid={data.cell_1_rx.childImageSharp.fluid} />,
              description:
                "Assume that the button on Cell 2 has been pressed. Cell 2 now needs to alert the Main Controller that this event has occurred. Since there is no direct connection between the Cell 2 and the Main Controller, Cell 2 first sends the message to Cell 1.",
            },
            {
              image: (
                <Image fluid={data.main_controller_rx.childImageSharp.fluid} />
              ),
              description:
                "Cell 1 receives the message from Cell 2. It looks at the message header, which identifies who the message is intended for. Since this destination cell is the Main Controller and not Cell 1, Cell 1 forwards the message to the Main Controller.",
            },
            {
              image: (
                <Image
                  fluid={data.main_controller_action.childImageSharp.fluid}
                />
              ),
              description:
                "The Main Controller receives the message from Cell 1. Upon reading the message header, it sees that it is the indented recipient of the message. The Main Controller now acts upon the contents of the message, in this instance by informing the currently-running app that the button on Cell 2 has been pressed.",
            },
          ]}
        />
        <FirmwareSimulator
          title="Discovering All Connected Cells"
          steps={[
            {
              image: (
                <Image fluid={data.main_controller_tx.childImageSharp.fluid} />
              ),
              description:
                "The Main Controller sends a message to Cell 1. The payload of the message tells Cell 1 to identify itself as cell number 1, and to continue the discovery process.",
            },
            {
              image: (
                <Image fluid={data.main_controller_rx.childImageSharp.fluid} />
              ),
              description:
                "Cell 1 receives the message from the Main Controller. Upon reading the payload, Cell 1 updates its internal state to reflect the fact that it is now Cell 1. Cell 1 then replies to the Main Controller, acknowledging that it received the message.",
            },
            {
              image: <Image fluid={data.cell_1_tx.childImageSharp.fluid} />,
              description:
                "Cell 1 sends a message to the next cell along, asking it to identify itself as cell number 2, and to continue the discovery process. Cell 1 identifies the next cell along as number 2 by adding 1 to it's internal cell number, which results in 2.",
            },
            {
              image: <Image fluid={data.cell_1_rx.childImageSharp.fluid} />,
              description:
                "Cell 2 receives the message from Cell 1. Upon reading the payload, Cell 2 updates its internal state to reflect the fact that it is now Cell 2. Cell 2 then replies to Cell 1, acknowledging that it received the message.",
            },
            {
              image: <Image fluid={data.cell_2_tx.childImageSharp.fluid} />,
              description:
                "Cell 2 sends a message to the next cell along, asking it to identify itself as cell number 3, and to continue the discovery process.",
            },
            {
              image: <Image fluid={data.cell_2_rx.childImageSharp.fluid} />,
              description:
                "Cell 3 receives the message from Cell 2. Upon reading the payload, Cell 3 updates its internal state to reflect the fact that it is now Cell 3. Cell 3 then replies to Cell 2, acknowledging that it received the message.",
            },
            {
              image: <Image fluid={data.cell_3_tx.childImageSharp.fluid} />,
              description:
                "Cell 3 sends a message to the next cell along, asking it to identify itself as cell number 3, and to continue the discovery process. It must do this even though there are no more cells connected, because Cell 3 has no way of knowing that there are no more cells connected without asking first.",
            },
            {
              image: <Image fluid={data.cell_3_no_rx.childImageSharp.fluid} />,
              description:
                "Cell 3 waits for an acknowledgement message from the next cell along. Since there are no more cells connected, no acknowledgement message is received. After a timeout, Cell 3 determines that it must be the last cell connected, and since it is cell number 3, that means there are a total of 3 cells connected.",
            },
            {
              image: (
                <Image
                  fluid={data.main_controller_action.childImageSharp.fluid}
                />
              ),
              description:
                "Cell 3 sends a message to the Main Controller, notifying it that there are a total of 3 cells connected. It does this using the same process outlined in <i>Receiving Input from Cells</i>",
            },
          ]}
        />
      </div>
    </>
  )
}

export default HowItWorks
