import React from 'react'
// import { Link } from 'gatsby'
import Title from '../Globals/Title'
import styled from 'styled-components'

export default function Info() {
  return (
    <Background>
      <section className="py-5 info-section">
        <div className="container"></div>
        <Title title="APPROACH"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              <strong>CUSTOM-MADE DESIGNS MADE SIMPLE</strong> - Without a smart process in place, design projects can be quite complex. Can’t see the wood for the trees? Then let us guide you, every step of the way.
            </p>
          </div>
        </div>
      </section>
    </Background>
  )
}

const Background = styled.section`
.info-section {
    background:rgba(236,236,236,0.5);
    height:auto;
    display:flex;
    align-items:center;
    align-content:center;
    justify-content:center;
    flex-direction:column;
    border-radius:80px;
    margin:50px;
    box-shadow:  13px 13px 26px #d4d4d4, 
             -13px -13px 26px #ffffff;
}

@media (min-width: 800px) {
.info-section {
    height:30vh;
    margin:50px 20px;
}
}
`
