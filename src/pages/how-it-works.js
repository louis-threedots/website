import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Loadable from "react-loadable"
import FirmwareSimulator from "../components/firmwareSimulator"
import SEO from "../components/seo"

const LoadableDisksViewer = Loadable({
  loader: () => import("../components/disksViewer"),
  loading: () => <span>Loading...</span>,
})

const Software = () => {
  return (
    <div className="flex flex-col items-start text-left mt-24 ">
      <h3 className="text-xl leading-12 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
        Software
      </h3>
      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Audio Interface
      </p>
      <p className="mt-4 mb-8 text-md leading-7  text-gray-600 lg:mx-auto">
        The audio interface implemented in Louis allows users to communicate
        with applications using voice commands. It converts voice input to text
        using Google’s speech recognition API to listen to what users have to
        say. It also generates speech from text based on Google’s Text-
        to-speech API (gTTS) so that visually impaired users can listen to audio
        instructions from Louis.
      </p>

      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Learn App
      </p>
      <p className="mt-4 mb-8 text-md leading-7  text-gray-600 lg:mx-auto">
        Learn basic braille alphabets on the Learn app. When you tell Louis
        which category of braille characters (choose one from letter, number,
        indicator and punctuation), your learning step begins. Louis prints out
        each character with an audio instruction such as "This is letter a.",
        allowing you to read it with your finger while listening to what Louis
        says.
      </p>

      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Tutor App
      </p>
      <p className="mt-4 mb-8 text-md leading-7  text-gray-600 lg:mx-auto">
        Test your braille knowledge on the Tutor app. After telling Louis how
        long do you want your test to be(choose one from short, medium and
        full). It shows you a number of randomly selected braille characters
        (they could be any of the following: letter, number, indicator or
        punctuation), and you are given three chances to suggest your guess of
        what each character would be. The characters that you answered wrong
        will be remembered so that you could re-learn them after the test.
      </p>

      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Headlines App
      </p>
      <p className="mt-4 mb-8 text-md leading-7 text-gray-600 lg:mx-auto">
        Test your braille reading skills if you believe you have learned enough
        to read news articles. You can read through BBC news articles from
        different categories of your choice. It retrieves a number of today's
        articles of the chosen category from BBC website and let you read them
        by printing characters on the cell(s) you have. Each cell recalibrates
        right after being read in order to allow users with small number of
        cells can benefit from this app.
      </p>

      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Riddles App
      </p>
      <p className="mt-4 mb-8 text-md leading-7 text-gray-600 lg:mx-auto">
        Stimulate learning, by solving interesting and comical riddles with
        answers that they can only find out by reading braille! This
        motivational approach has been previously adopted by Royal Blind,
        Scotland’s largest vision impairment organisation. Easily browse through
        the riddle library by using voice commands. Keeps track of which riddle
        has been viewed most recently, so you can conveniently pick up where you
        left off.
      </p>

      <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Memory App
      </p>
      <p className="mt-4 mb-8 text-md leading-7 text-gray-600 lg:mx-auto">
        Play the traditional Memory card game, for one or two players, where the
        cards are individual cells corresponding to a braille alphabet
        character. Developed to stimulate learning, by practising the
        memorisation of the braille alphabet characters in a recreational way.
      </p>
      <p className="mt-4 mb-8 text-md leading-7 text-gray-600 lg:mx-auto">
        Players first determine if they are playing on their own or not. In solo
        mode, the number of turns is recorded, so that the player can attempt to
        find all pairs in as little turns as possible. When playing together,
        the app will keep track of the score. A player can ‘flip a card’ by
        pressing the button on a cell. That cell will go from a blank output to
        rendering the associated character. A second cell can be selected in the
        same way. The player gets time to inspect the characters, and can move
        on to the next turn by saying ‘next’. The output will then return to
        blank again if it was not a pair. If the two cells were showing
        corresponding characters, they will stay ‘facing upwards’. The character
        will be read out to reinforce learning and the player earns a point. In
        multiplayer mode, the same player gets another turn.
      </p>
    </div>
  )
}

const Hardware = () => {
  return (
    <div className="text-left">
      <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
        Hardware
      </h3>
      <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
        The hardware design was inspired by combination locks and Gray Code.
        Each cell uses a single motor, which rotates an axel holding two disks.
        The top disk is smaller than the bottom one and it rests directly on top
        of it. This enabled us to represent half a Braille character with the
        larger disk and the other half with the smaller disk. The smaller disk
        is fixed on the axel, while the big disk is loose and rotates only when
        a catch, attached to it from below, is pushed by the axel. This enables
        us to rotate the axle in one direction to position the larger disk then
        rotate the axle in the other direction to position the smaller disk.
      </p>
      <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
        Initially, apart from the difference of the size, the two disks were
        identical and had whole segments raised, which themselves were pushing
        pins up, forming the braille characters. At the end of the third
        iteration though, in an effort to decrease the size, we decided to raise
        small bumps on the surface of the disks which would represent the
        braille characters and thus avoid the difficulties of working with pins.
        Furthermore, we altered the big and small disks so they would have
        triple and double encoding respectively, which enabled for smaller and
        faster transitions between the different combinations.
      </p>

      <div className="mx-auto text-center">
        <LoadableDisksViewer />
        <p className="text-sm leading-5 text-gray-600">
          Interactive Disks Render
        </p>
      </div>

      <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
        Our cell walls were made from lego bricks during the testing phase and
        were intended to be replaced by a combination of 3D printed and
        transparent CNCd walls before the start of the fourth iteration.{" "}
      </p>
      <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
        The cells are controlled by the main controller which contains a
        speaker, a microphone, the Raspberry Pi single-board computer and the
        rechargeable batteries. On a cell there are the pins that display a
        braille character as well as a button, which can be used as an input in
        particular apps. The cells are connected end-to-end with the main
        controller and each of them is operated using our own custom-made PCB
        board.
      </p>
    </div>
  )
}

const Firmware = () => {
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
      command_bytes: file(relativePath: { eq: "command_bytes.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      firmware_state_machine: file(
        relativePath: { eq: "firmware_state_machine.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pcb_combined: file(relativePath: { eq: "pcb_combined.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="text-left">
      <h3 className="text-xl leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9">
        Firmware
      </h3>
      <p className="text-base mt-10  text-left leading-6  text-indigo-600 font-semibold tracking-wide uppercase">
        Communications Protocol
      </p>
      <div>
        <div className="max-w-3xl mx-auto">
          <Image
            fluid={data.command_bytes.childImageSharp.fluid}
            className="my-4"
          />
        </div>
        <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
          The main controller and cells communicate using a four-byte command
          protocol. The first byte contains the destination of the command. This
          is required because the main controller and cells are chained
          together, meaning that a message from the main controller to the last
          connected cell would need to pass through all the connected cells in
          order to reach the last cell.
        </p>
        <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
          The second byte in the protocol identifies the specific command to be
          performed. This includes rotations of either the large or small disk,
          button presses, calibration, etc..
        </p>
        <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
          The third and fourth bytes in the command protocol hold the data that
          is required to process the specified command. This includes the angle
          for a rotation of the disks, the cell number when a button is pressed,
          and a status message when initialising louis.
        </p>
      </div>
      <p className="text-base mt-10  text-left leading-6  text-indigo-600 font-semibold tracking-wide uppercase">
        Firmware
      </p>
      <div>
        <div className="max-w-3xl mx-auto">
          <Image
            fluid={data.firmware_state_machine.childImageSharp.fluid}
            className="my-4"
          />
        </div>
        <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
          The firmware running on the microcontroller in each cell implements a
          Finite State Machine (FSM). The purpose of this FSM is to receive
          incoming commands, read the commands, then act on them accordingly.
          Each of the steps in the FSM is outlined below.
        </p>
        <div className="prose">
          <ol>
            <li>
              <b>Wait for command</b>: in the starting state, the firmware
              idles, continuously polling the serial ports until it receives a
              command.
            </li>
            <li>
              <b>Check command</b>: when a command is received through one of
              the serial ports, the firmware first checks the header of the
              received command to check the destination.
            </li>
            <li>
              <b>Process command</b>: if the destination of the command is the
              current cell, the command will be processed by the cell. For
              example, this could involve displaying a certain braille character
              by performing a specific rotation.
            </li>
            <li>
              <b>Forward command</b>: if the destination of the command is not
              the current cell, the firmware forwards the command in the
              direction that will lead to the current cell.
            </li>
          </ol>
        </div>
      </div>
      <p className="text-base mt-10  text-left leading-6  text-indigo-600 font-semibold tracking-wide uppercase">
        Interactive Examples
      </p>
      <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
        The following three interactive widgets demonstrate three core features
        of the firmware: sending output from the main controller to connected
        cells, sending input from the connected cells to the main controller,
        and determining the number of cells that are connected.
      </p>
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
      <p className="text-base mt-10  text-left leading-6  text-indigo-600 font-semibold tracking-wide uppercase">
        Custom Printed Circuit Board (PCB)
      </p>

      <div className="max-w-3xl mx-auto">
        <Image
          fluid={data.pcb_combined.childImageSharp.fluid}
          className="my-4"
        />
      </div>

      <p className="mt-4 text-md leading-7 text-gray-600 lg:mx-auto">
        A major goal of louis is to keep the unit cost of individual cells to a
        minimum. Although the firmward had been developed using the Arduino
        hardware and software, it was decided that a custom PCB would allow for
        reduced costs in the long run, particularly if produced at scale. This
        PCB was designed to include only the absolute minimum number of
        components in order to reduce the Bill of Materials.
      </p>
    </div>
  )
}

const HowItWorks = () => {
  return (
    <>
      <SEO title="How it Works" />

      <div>
        <div className="relative pl-5 pt-5"></div>
        <div className="py-12 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                How it Works
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                A Behind the Scenes Look
              </h3>
              <Link
                to="/lab-book"
                className=" mx-auto mt-5 w-48 flex items-center justify-center py-2 border border-transparent text-base leading-6 font-md rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4"
              >
                View Lab Book
              </Link>
              <Software />
              <Hardware />
              <Firmware />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
