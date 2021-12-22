import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function Product({ product }) {
    return (
        <Card className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{}}>
                <Img fluid={product.image.fluid} className="card-img-top" />
                <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6>€{product.price}</h6>
                    <button
                        className="btn btn-pink mt-3 text-capitalize snipcart-add-item"
                        data-item-id={product.id}
                        data-item-name={product.title}
                        data-item-price={product.price}
                        data-item-image={product.image.fluid.src}
                        data-item-url="https://chipchop.nl/shop"
                    >Add</button>
                </div>
            </div>
        </Card>

    );
}

const Card = styled.div`
background:transparent;
border-radius: 80px;
.card {
    /* border-radius:20%; */
    min-height:100%;
    box-shadow:  13px 13px 26px #d4d4d4, 
             -13px -13px 26px #ffffff;
    
}
`