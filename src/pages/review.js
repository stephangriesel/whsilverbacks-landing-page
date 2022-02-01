import React,  { useState, useEffect } from "react"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import SEO from "../components/seo"

import AddReview from "../components/Reviews/AddReview"
import Reviews from "../components/Reviews/Reviews"

import styled from 'styled-components';

const review = ({ data }) => (
  <Layout>
    <SEO title="Why ChipChop" />
    <Wrapper>
      <AddReview />  
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

const Header = styled.div`
`

export default review