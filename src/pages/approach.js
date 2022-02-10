import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import SEO from "../components/seo"


import { Parallax } from 'react-parallax';


import Info4 from '../components/Home/InfoCompany4'
import Info5 from '../components/Home/InfoCompany5'
import Info6 from '../components/Home/InfoCompany6'

const whyPage = ({ data }) => (
  <Layout>
    <SEO title="Approach" />
    <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info4 /></div>
    <Parallax
      blur={{ min: -5, max: 0 }}
      bgImage={require('../images/info3.jpg')}
      bgImageAlt="Workbench"
      strength={-500}
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
    </Parallax>

    <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info5 /></div>

    <Parallax
      blur={{ min: -5, max: 0 }}
      bgImage={require('../images/info4.jpg')}
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
    </Parallax>

    <div style={{ backgroundColor: 'rgba(210,226,226,0.)' }}><Info6 /></div>

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

export default whyPage
