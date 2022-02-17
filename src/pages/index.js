import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Footer from "../components/Globals/Footer"
// import SEO from "../components/seo"
import Temp from "../components/temp"

// import BackgroundSection from "../components/Globals/BackgroundSection"

// import { Parallax } from 'react-parallax';


// import Info from '../components/Home/Info'
// import LatestProducts from "../components/Home/ProductHighlights"

const IndexPage = ({ data }) => (
  <Layout>

    <Temp />

  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
