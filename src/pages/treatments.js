import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const TreatmentsPage = ({ data }) => {
  console.log("page query data test", data);
  const { items: { info } } = data
  return (
    <Layout>
      <SEO title="Treatments" />
      <Wrapper>
        <div className="row-group">
          {info.map(item =>
            <div className="column-item">
              {item.title}: <strong>R{item.price}</strong>
            </div>
          )}
        </div>
      </Wrapper>
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

const Wrapper = styled.main`
.row-group {
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-content:center;
  height:70vh;
}
.column-item {
  text-align:center;
  margin: 0 10em;
}
`

export default TreatmentsPage
