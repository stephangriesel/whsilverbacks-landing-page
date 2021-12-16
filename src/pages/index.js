import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import SEO from "../components/seo"

// import BackgroundSection from "../components/Globals/BackgroundSection"

import { Parallax, Background } from 'react-parallax';


import Info from '../components/Home/Info'
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
      blur={{ min: -25, max: 5 }}
      bgImage={require('../images/default.jpg')}
      bgImageAlt="Workbench"
      strength={-200}
      style={{
        height: '680px',
        backgroundColor: '#d2e2e2',
      }}
    >
      <div style={{
        height: '400px',
        backgroundColor: 'rgba(210,226,226,0.)',
        right: '20px'
      }}></div>
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 5 }}
      strength={-100}
      style={{

      }}
    >
      <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info /></div>
    </Parallax>

    <Parallax
      blur={{ min: -1, max: 1 }}
      bgImage={require('../images/main.jpg')}
      bgImageAlt="the dog"
      strength={-150}
      style={
        {
          marginTop: '0px',
          backgroundColor: '#eccecc',
          height: '650px'
        }
      }
    >
      {/* Blur transition from min to max */}
      <div style={{ height: '400px' }} />
    </Parallax>

    <Parallax
      blur={{ min: -1, max: 1 }}
      strength={-150}
      style={
        {
          marginTop: '0px',
        }
      }
    >
      {/* Blur transition from min to max */}
      <div style={{}}><LatestProducts /></div>
    </Parallax>

    <Footer />

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
