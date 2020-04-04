import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ format = "icon", white = false, className = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-black.png" }) {
        publicURL
      }
      whiteLogo: file(relativePath: { eq: "logo-white.png" }) {
        publicURL
      }
      louisDots: file(relativePath: { eq: "louisdots-black.png" }) {
        publicURL
      }
      whiteLouisDots: file(relativePath: { eq: "louisdots-white.png" }) {
        publicURL
      }
      louis: file(relativePath: { eq: "louis-black.png" }) {
        publicURL
      }
      whiteLouis: file(relativePath: { eq: "louis-white.png" }) {
        publicURL
      }
    }
  `)

  let image

  switch (format) {
    case "full":
      image = white ? data.whiteLouisDots : data.louisDots
      break
    case "text":
      image = white ? data.whiteLouis : data.louis
      break
    case "icon":
    default:
      image = white ? data.whiteLogo : data.logo
  }

  return <img src={image.publicURL} alt="louis Logo" className={className} />
}

Logo.propTypes = {
  format: PropTypes.string,
  white: PropTypes.bool,
  className: PropTypes.string,
}

Logo.defaultProps = {
  format: "icon",
  white: false,
  className: "",
}

export default Logo
