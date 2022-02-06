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
          <div className="lead text-muted mb-5">
              <p className='flex-column'>
                  <span className="number">HIGH QUALITY</span>
                  Everything we make, is built to last, even with intensive daily use.
                </p>
                <p className='flex-column'>
                  <span className="number">GOOD DESIGN</span>
                  Our designs are always pleasing to look at, easy to get and intuitive to use.
                </p>
                <p className='flex-column'>
                  <span className="number">CUSTOMER SERVICE</span>
                  We are on a journey to make customers happy with custom-made happiness.
                </p>
                <p className='flex-column'>
                  <span className="number">BIG FUN</span>
                  When crafting our products, we put the ‘fun’ back into ‘functionality’.
                </p>
                <p className='flex-column'>
                  <span className="number">EPIC SUSTAINABILITY</span>
                  Our materials are ethically sourced and our output is epically durable
                </p>
                </div>
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

.flex-column {
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  .number {
    background-color:var(--mainPink);
    display:flex;
    align-items:center;
    justify-content:center;
    border:0px solid #000;
    font-size:1em;
    padding:0.5em;
    margin:0.5em;
    transform:rotate(-0deg);
    border-radius:10px;
    -webkit-box-shadow: 15px 17px 28px -19px #4B5B5A; 
    box-shadow: 15px 17px 28px -19px #4B5B5A;
  }
}

@media (min-width: 800px) {
.info-section {
    height:120vh;
    margin:100px 20px;
}
}
`
