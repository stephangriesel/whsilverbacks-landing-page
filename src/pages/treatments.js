import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import SearchButtons from '../components/Home/SearchButtons'

const TreatmentsPage = ({ data }) => {
  console.log("page query data test", data);
  const { items: { info } } = data
  return (
    <Layout>
      <SEO title="Treatments" />
      {/* <SearchButtons /> */}
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
  align-items:center;
}

.column-item {
  margin:0;
  align-content:center;
  justify-content:center;


@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 768px) {
  .row-group {
    background:red;
  }
}


}


`

export default TreatmentsPage
