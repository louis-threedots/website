import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "./index.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Lora:400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
