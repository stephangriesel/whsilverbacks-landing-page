import React from "react"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import SEO from "../components/seo"

import AddReview from "../components/Reviews/AddReview"
import styled from 'styled-components';

const review = ({ data }) => (
  <Layout>
    <SEO title="Why ChipChop" />
    <Wrapper>
      <AddReview />
      {/* <ProductReview onChange={log} /> */}
      </Wrapper>
    <Footer />
  </Layout>
)

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10px;
margin:15px;

`

export default review