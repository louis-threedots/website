import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import SEO from "../components/seo"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      MatasBaksaitis: file(relativePath: { eq: "MatasBaksaitis.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      NinaBecx: file(relativePath: { eq: "NinaBecx.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GregBrimble: file(relativePath: { eq: "GregBrimble.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BillyByiringiro: file(relativePath: { eq: "BillyByiringiro.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ChanwooChoi: file(relativePath: { eq: "ChanwooChoi.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RagnorComerford: file(relativePath: { eq: "RagnorComerford.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AndrewFerguson: file(relativePath: { eq: "AndrewFerguson.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      EvanMoss: file(relativePath: { eq: "EvanMoss.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      AndreasNearchou: file(relativePath: { eq: "AndreasNearchou.png" }) {
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
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.NinaBecx.childImageSharp,
    },
    {
      name: "Nina Becx",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.NinaBecx.childImageSharp,
    },
    {
      name: "Greg Brimble",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
    },
    {
      name: "Billy Byiringiro",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
    },
    {
      name: "Chanwoo Choi",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
    },
    {
      name: "Ragnor Comerford",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
    },
    {
      name: "Andrew Ferguson",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
    },
    {
      name: "Evan Moss",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
    },
    {
      name: "Andreas Nearchou",
      description: "Dictum sollicitudin malesuada semper dis nunc lectus",
      image: data.GregBrimble.childImageSharp,
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
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <div class="lg:grid lg:grid-cols-3 lg:gap-8">
              {team.map(({ name, description, image }) => (
                <div className="mt-10 lg:mt-0 first:mt-0">
                  <Image fluid={image.fluid} className="h-24 w-24 rounded-md" />
                  <div class="mt-5">
                    <h5 class="text-lg leading-6 font-medium text-gray-900">
                      {name}
                    </h5>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>TODO: Organization info</div>
    </>
  )
}

export default Team
