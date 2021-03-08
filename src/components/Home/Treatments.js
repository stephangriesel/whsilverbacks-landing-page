import React from 'react'
import styled from 'styled-components'

const Treatments = () => {
    return (
        <>
            <Wrapper>
                data here
            </Wrapper>
        </>
    )
}

const Wrapper = styled.main`
min-height:100vh;
`

export const query = graphql`
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



export default Treatments
