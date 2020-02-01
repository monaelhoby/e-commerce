import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({value}) => {
    const{cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return(
        <div className="text-center card cartlist">
            <Link to="/">
             <button onClick={() => clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5 d-block">Clear Cart</button>
            </Link> 
            <h5 className="text-title">Subtitle : <strong> $ {cartSubtotal}</strong></h5>
            <h5 className="text-title">Cart Tax : <strong> $ {cartTax}</strong></h5>
            <h5 className="text-title">Cart Total : <strong> $ {cartTotal}</strong></h5>
        </div>
    )
}

export default Card