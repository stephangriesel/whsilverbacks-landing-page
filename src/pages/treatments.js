import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
// import SearchButtons from '../components/Home/SearchButtons'

const TreatmentsPage = ({ data }) => {

  const { items: { info } } = data
  console.log("info page query data test", info);

  const [filter, setFilter] = useState('All');
  const [treatments, setTreatments] = useState([])

  useEffect(() => {
    setTreatments(info)
  }, []);

  useEffect(() => {

    setTreatments([])

    const filtered = info.map(t => ({ ...t, filtered: t.category.includes(filter) }))

    setTreatments(filtered)
  }, [filter])

  console.log("filter test", filter)

  return (
    <Layout>
      <SEO title="Treatments" />
      <div className="treatment-labels">
        <a href="#" active={filter === 'All'} onClick={() => setFilter('All')}>All</a>
        <a href="#" active={filter === 'Body'} onClick={() => setFilter('Body')}>Body</a>
        <a href="#" active={filter === 'Eyes'} onClick={() => setFilter('Eyes')}>Eyes</a>
        <a href="#" active={filter === 'Face'} onClick={() => setFilter('Face')}>Face</a>
        <a href="#" active={filter === 'Feet'} onClick={() => setFilter('Feet')}>Feet</a>
        <a href="#" active={filter === 'Hairfree'} onClick={() => setFilter('Hairfree')}>Hairfree</a>
        <a href="#" active={filter === 'Hands'} onClick={() => setFilter('Hands')}>Hands</a>
      </div>
      <Wrapper>
        <div className="row-group">
          {treatments.map(item => item.filtered === true ? (
            <span key={item.id}>
              {item.title}: <strong>R{item.price}</strong>
            </span>
          ) : '')}
          {/* {info.map(item =>
            <div className="column-item">
              {item.title}: <strong>R{item.price}</strong>
            </div>
          )} */}
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
}


@media only screen and (min-width: 768px) {
  .row-group {
    display:flex;
    flex-wrap:wrap;
    height:70vh;
  }
}

`

export default TreatmentsPage
