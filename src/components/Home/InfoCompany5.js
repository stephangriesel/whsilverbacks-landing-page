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
                  <span className="number">1</span>
                  <span class="bold">CONTACT:</span> 
                  Get in touch for an initial conversation about your ideas and needs.
                </p>
                <p>ESTIMATE: We’ll get back to you with a project outline and a cost estimate.</p>
                <p>DESIGN: Let us create the final design and give you a quote to sign off on.</p>
                <p>PRODUCTION: As we frequently share visual updates, you can oversee our progress.</p>
                <p>INSTALLATION: We deliver and install the finalized product with the greatest care.</p>
                <p>AFTERCARE: Should any problem arise, feel free to contact us and have us fix it.</p>
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
    border:1px solid #000;
    width:1em;
    padding:1em;
    margin:1em;
    transform:rotate(-12deg);
  }
}

@media (min-width: 800px) {
.info-section {
    height:auto;
    margin:50px 20px;
}
}
`
