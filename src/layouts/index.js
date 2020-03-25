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

  const menuItems = [
    { label: "System", href: "/system" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Evaluation", href: "/evaluation" },
    { label: "Budget", href: "/budget" },
    { label: "Team", href: "/team" },
    { label: "Comments", href: "/comments" },
    { label: "Interactive Demo", href: "/demo", isPrimary: true },
  ]

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} menuItems={menuItems} />
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
