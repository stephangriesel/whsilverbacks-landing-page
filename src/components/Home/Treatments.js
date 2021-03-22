import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const getData = graphql`
{
  items: allContentfulHappyItem {
    edges {
      node {
        id
        title
        price
        category
        image {
          fixed(width: 50, height: 50) {
            src
          }
        }
        description
      }
    }
  }
}
`

const Treatments = () => {
  const data = useStaticQuery(getData)
  // console.log("static query graphql data", data)
  // filter: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
  return (
    <>
      <Wrapper>
        {/* test: {data.items.edges[0].node.title} */}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.main`
min-height:100vh;
`
export default Treatments
