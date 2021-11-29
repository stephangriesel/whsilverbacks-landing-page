import React from 'react'
import Product from './Product'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

export default function LatestProducts() {
  return (
    <StaticQuery query={getLatestProducts} render={data => {
      return (
        <section>
          <section className="py-5">
            <div className="container py-5">
              {/* <Title title="Latest ChipChop Products" /> */}
              <div className="row py-5">
                {data.latestProducts.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        </section>

      )
    }} />
  );
}

const getLatestProducts = graphql`
{
  latestProducts: allContentfulLatestProduct{
      edges{
        node{
          id
          title
          price
          image{
            fluid(maxHeight:450){
                src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`