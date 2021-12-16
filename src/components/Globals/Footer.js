import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrap className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capatalize">
                        <h6>{new Date().getFullYear().toString()}</h6>
                    </div>
                </div>
            </div>
        </FooterWrap>
    )
}

const FooterWrap = styled.section`
/* background:#FFFFFF; */
section {
    height:100px;
    box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
}
}`
