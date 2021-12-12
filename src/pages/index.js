import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/Globals/BackgroundSection"

import { Parallax, Background } from 'react-parallax';


// import Info from '../components/Home/Info'
import LatestProducts from "../components/Home/ProductHighlights"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="ChipChop"
      styleClass="default-background"
    /> */}
    <Parallax
      blur={{ min: -5, max: 5 }}
      bgImage={require('../images/default.jpg')}
      bgImageAlt="the dog"
      strength={-100}
      style={
        {
          marginTop: '20px',
          marginBottom: '20px',
        }
      }
    >
      {/* Blur transition from min to max */}
      <div style={{ height: '700px', padding: '20px' }} />
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('../images/main2.jpg')}
      bgImageAlt="the dog"
      strength={-200}
    >
      Blur transition from min to max
      <div style={{ height: '400px' }} />
    </Parallax>
    <LatestProducts />
    {/* <Info /> */}
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
