import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {StoreContext} from "../context_api";
import {ProductWrapper} from "./style";
import propTypes from 'prop-types';
import Actions from "../../store/actions";


const Product = props => {

    const {dispatch} = useContext(StoreContext);
    const {id, title, img, price, inCart} = props.product;
    return(
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
               <div className="img-container" onClick={() => dispatch(Actions.handleDetailsAction(id))}>
                    <Link to="/details" >
                        <img src={img} alt="product img" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false} 
                            onClick={ () =>{
                                   dispatch(Actions.addToCartAction(id));
                                   dispatch(Actions.openModalAction(id));
                                }}>
                    { inCart ? (<p className="text-capitalize mb-0" disabled>in Cart</p>) : (<i className="fas fa-cart-plus"></i>)}
                    </button>
                </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-second font-italic mb-0">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
            </div>
        </ProductWrapper>
    )
}

Product.propTypes={
    product:propTypes.shape({
        id:propTypes.number,
        img:propTypes.string,
        title:propTypes.string,
        price:propTypes.number,
        inCart:propTypes.bool
    }).isRequired
}

export default Product


