import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import SkillsOne from '../components/Skills/SkillsOne';

// import BackgroundSection from '../components/Globals/BackgroundSection';

const Skills = (props) => {
  const [element, controls] = useScroll();
  return (
    <Layout>
      <SEO title="Skills" />
      {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Skills Us"
      styleClass="Skills-background"
    /> */}
      <motion.div initial='show' className='skills-wrapper'>
        <div className='overlay'>
          <SkillsOne initial='hidden' ref={element} animate={controls} />
          <SkillsOne initial='hidden' ref={element} animate={controls} />
          <SkillsOne initial='hidden' ref={element} animate={controls} />
          <SkillsOne initial='hidden' ref={element} animate={controls} />
          <div className='spacer'></div>
        </div>
      </motion.div>
    </Layout>
  )
};

const Wrapper = styled(motion.main)`
  min-height: calc(100vh - 5rem);
  margin-top: -5rem;
  margin: 0 2em;
  .skills-wrapper {
    margin-top: 3em;
    .image-block {
      /* height: 400px; */
      /* position: relative; */
    }
    .top-box {
      height: 80vh;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: column;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin: 2em;
        width: 100%;
        .border-radius-50 {
          border-radius: 50%;
        }
      }
      .txt-box {
        width: 100%;
        display: flex;
        align-self: center;
        margin: 2em;
      }
    }
    .two-column {
      /* height: 100vh; */
      display: flex;
      flex-direction: column;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        h3 {
          margin: 0.5rem 2rem;
          /* font-size: 2.25rem; */
        }
        p {
          margin: 0 2rem;
          /* font-size: 1.25rem; */
        }
        ul {
          margin: 0 2rem;
        }
      }
    }
    .two-column-alt {
      /* height: 100vh; */
      display: flex;
      flex-direction: column-reverse;
      .img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
      }
      .txt-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 2em 0;
        h3 {
          margin: 0.5rem 2rem;
          /* font-size: 2.25rem; */
        }
        p {
          margin: 0 2rem;
          /* font-size: 1.25rem; */
        }
        ul {
          margin: 0 2rem;
        }
      }
    }
  }

  .spacer {
    margin: 5em 0;
  }

  @media (min-width: 800px) {
    .about-wrapper {
      .image-block {
      }
      .overlay {
      }
      .overlay::after {
      }
      .top-box {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
          .border-radius-50 {
            border-radius: 50%;
          }
        }
        .txt-box {
          width: 50%;
        }
      }
      .two-column {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
        }
        .txt-box {
          display: flex;
          align-self: center;
          width: 50%;
        }
      }
      .two-column-alt {
        display: flex;
        flex-direction: row;
        .img-box {
          width: 50%;
        }
        .txt-box {
          display: flex;
          align-self: center;
          height: auto;
          width: 50%;
        }
      }
    }
  }
`;

export const query = graphql`
    {
      img:file(relativePath:{
        eq:"contactus.jpg"
      }){
        childImageSharp{
          fluid(quality:100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    `

export default Skills;


