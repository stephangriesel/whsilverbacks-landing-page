import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Treatments from '../components/Home/Treatments'

const TreatmentsPage = ({ data }) => {
  console.log("page query data test", data);
  return (
    <Layout>
      <SEO title="Treatments" />
      <p>{data.items.nodes[0].title}</p>
      <Treatments />
    </Layout >
  )
}

export const data = graphql`
query MyQuery {
  items: allContentfulHappyItem {
    nodes {
      title
      category
      price
    }
  }
}
`

export default TreatmentsPage
