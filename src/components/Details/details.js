import React from 'react';
import {Link} from 'react-router-dom';
import {StoreConsumer} from "../context_api";
import {ButtonContainer} from "../navbar/style";


const Details = () => {
    return(
        <StoreConsumer>
            {value => {
                const {id, title, img, price, company, info, inCart} = value.productDetails;
                    return (
                        <div className="container py-5">
                        <h1 className="text-center text-slanted text-second my-5">{title}</h1>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="detail"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 text-capitalized my-3 text-left">
                                    <h3 className="text-title">model : {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
                                        Made By : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-second">
                                        <strong>Price : <span>$</span>{price}</strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0 ">Some info about product :</p>
                                    <p className="text-muted lead">{info}</p>
                                    <Link to="/"><ButtonContainer>Back to product</ButtonContainer></Link>
                                    <ButtonContainer cart 
                                      disabled={inCart ? true : false} 
                                      onClick={ () => {value.addToCart(id)}} >
                                    { inCart ? "in Cart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    )
            }}
        </StoreConsumer>
    )
}


export default Details