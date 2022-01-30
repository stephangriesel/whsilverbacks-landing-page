import React from "react"
import Layout from "../components/layout"
import Footer from "../components/Globals/Footer"
import SEO from "../components/seo"

import ProductReview from "../components/Home/ProductReview"

function log(value) {
  console.log(value);
}

const review = ({ data }) => (
  <Layout>
    <SEO title="Why ChipChop" />
      <ProductReview onChange={log} />
    <Footer />
  </Layout>
)

export default review