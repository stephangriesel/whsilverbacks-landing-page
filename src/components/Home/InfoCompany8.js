import React from 'react'
import styled from 'styled-components'

export default function Info() {
  return (
    <Background>
      <section className="py-5 info-section">
        <div className="container"></div>
        {/* <Title title="WHY CHIPCHOP"></Title> */}
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
              <ul className="lead text-muted mb-5">
                <li>HIGH QUALITY: Everything we make, is built to last, even with intensive daily use.</li>
                <li>GOOD DESIGN: Our designs are always pleasing to look at, easy to get and intuitive to use.</li>
                <li>CUSTOMER SERVICE: We are on a journey to make customers happy with custom-made happiness.</li>
                <li>BIG FUN: When crafting our products, we put the ‘fun’ back into ‘functionality’.</li>
                <li>EPIC SUSTAINABILITY: Our materials are ethically sourced and our output is epically durable.</li>
              </ul>
          </div>
        </div>
      </section>
    </Background>
  )
}

const Background = styled.section`
.btn-pink {
  color: var(--mainWhite);
  border-color: var(--mainPink) solid;
  background-color: var(--mainGrey);
}
.btn-pink:hover {
  background: var(--mainPink);
  color: var(--mainGrey);
  border-color: var(--mainPink) solid;
  -webkit-transition: ease-in 0.5s;
  transition: ease-in 0.5s;
}
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
    height:60vh;
    margin:50px 20px;
}
}
`
