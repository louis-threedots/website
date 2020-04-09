import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import SEO from "../components/seo"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      Matas: file(relativePath: { eq: "Matas.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Nina: file(relativePath: { eq: "Nina.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Greg: file(relativePath: { eq: "Greg.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Billy: file(relativePath: { eq: "Billy.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Chanwoo: file(relativePath: { eq: "Chanwoo.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Ragnor: file(relativePath: { eq: "ragnor.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Andrew: file(relativePath: { eq: "Placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Evan: file(relativePath: { eq: "Evan.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Andreas: file(relativePath: { eq: "Placeholder.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const team = [
    {
      name: "Matas Baksaitis",
      description: "Marketing & Design and Hardware Engineer",
      image: data.Matas.childImageSharp,
    },
    {
      name: "Nina Becx",
      description: "Software Engineer",
      image: data.Nina.childImageSharp,
    },
    {
      name: "Greg Brimble",
      description: "Project Manager and Hardware System Design Lead",
      image: data.Greg.childImageSharp,
    },
    {
      name: "Billy Byiringiro",
      description: "Hardware Engineer and Firmware Engineer",
      image: data.Billy.childImageSharp,
    },
    {
      name: "Chanwoo Choi",
      description: "Marketing & Design and Software Engineer",
      image: data.Chanwoo.childImageSharp,
    },
    {
      name: "Ragnor Comerford",
      description: "Software System Design Lead",
      image: data.Ragnor.childImageSharp,
    },
    {
      name: "Andrew Ferguson",
      description: "Firmware Engineer",
      image: data.Andrew.childImageSharp,
    },
    {
      name: "Evan Moss",
      description: "Marketing & Design and Software Engineer",
      image: data.Evan.childImageSharp,
    },
    {
      name: "Andreas Nearchou",
      description: "Hardware Engineer and Firmware Engineer",
      image: data.Andreas.childImageSharp,
    },
  ]

  return (
    <>
      <SEO title="Team" />
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Team
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              The people behind <span className="font-louis">louis</span>
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              9 skilled engineers with the mission to improve the quality of
              life for people with visual impairment.
            </p>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <p className="text-5xl leading-none font-extrabold text-indigo-600">
                        1.6K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Person Hours
                      </p>
                    </div>
                    <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <p className="text-5xl leading-none font-extrabold text-indigo-600">
                        19.3K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Lines of Code
                      </p>
                    </div>
                    <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <p className="text-5xl leading-none font-extrabold text-indigo-600">
                        3.3K+
                      </p>
                      <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        Slack Messages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {team.map(({ name, description, image }) => (
                <div className="mt-10 lg:mt-0 first:mt-0">
                  <Image fluid={image.fluid} className="h-24 w-24 rounded-lg" />
                  <div className="mt-5">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      {name}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-20 text-md  leading-7 text-gray-500 ">
            Our organisational structure is based on the distribution of
            pre-existing skills as to increase the probability of on-time
            delivery of the project while still accommodating individual team
            members’ desire to learn new skills in areas they lack expertise.
            The project manager is responsible for activity and resource
            allocation, as well as risk analysis and contingency planning,
            whereas the secretary is concerned with the management of deadlines
            and meeting planning.
          </p>
          <p className="mt-2 text-md  leading-7 text-gray-500 ">
            The rest of the team is divided into the functional units of
            hardware and software, and sub-units for system design, and
            low-level/high-level for software. Communication be- tween the
            system design role of hardware and software is essential in order to
            ensure the interoperability of the systems developed independently
            by the team members.{" "}
          </p>
          <p className="mt-2 text-md leading-7 text-gray-500 ">
            All communication is handled on Slack to avoid scattering of
            information and to ensure consistency and transparency. The number
            of channels is reduced to a minimum. Fixed weekly meetings for the
            whole team are scheduled in advance to ensure the availability of
            all team members to discuss the current progress of the project and
            potentially plan adjustment measures. Additionally, team members are
            committed to daily stand-ups on Slack with the aim of synchronizing
            information among the team and identifying potential issues.{" "}
          </p>
          <p className="mt-2  text-md  leading-7 text-gray-500 ">
            Code-sharing and version control are all handled using git and
            GitHub. In order to guarantee the cleanliness and functionality of
            the code base, a contribution procedure is enforced by which commits
            cannot be pushed directly to the master branch but must be submitted
            using pull requests. The pull requests are then peer-reviewed by
            other team members and automatically checked for compilation errors
            in the continuous integration pipeline.
          </p>
        </div>
      </div>
    </>
  )
}

export default Team
