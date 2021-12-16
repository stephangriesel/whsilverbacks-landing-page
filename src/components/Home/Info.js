import React from 'react'
// import { Link } from 'gatsby'
import Title from '../Globals/Title'
import styled from 'styled-components'

export default function Info() {
    return (
        <Background>
            <section className="py-5 info-section">
                <div className="container"></div>
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            ChipChop is Meubelmaker Marc Lineham, Who has over 10 years experience making retail displays, furniture making and interior building. ChipChop is about sustainabilty, quality and craftsmanship. In collaboratiuon with you, the goal is create something unique that can be enjoyed for a long time.
                        </p>
                    </div>
                </div>
            </section>
        </Background>
    )
}

const Background = styled.section`
background:#FFFFFF;

.info-section {
    height:85vh;
}

@media (min-width: 800px) {
.info-section {
    height:40vh;
}
}
}`
