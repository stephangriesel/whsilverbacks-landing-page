import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TreatmentsPage = ({ data }) => {
  console.log("page query data test", data);
  const { items: { info } } = data
  return (
    <Layout>
      <SEO title="Treatments" />
      <>
        <p>{info.map(item => <div>{item.title}: <strong>R{item.price}</strong></div>)}</p>
      </>
    </Layout >
  )
}

export const data = graphql`
query MyQuery {
  items: allContentfulHappyItem(sort: {fields: title, order: ASC}) {
    info:nodes {
      title
      category
      price
      id
    }
  }
}
`

export default TreatmentsPage
