import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../logo.png";
import {ButtonContainer, NavWrapper} from "./style.js";



const Navbar = () => {
    return(
        <NavWrapper className="navbar navbar-expand-md">
          <div className="container"> 
            <Link className="navbar-brand" to="/"><img src={Logo} alt="Store" height="80px"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                    <ButtonContainer>Products<span className="sr-only">(current)</span></ButtonContainer>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link ml-auto" to="/cart">
                        <ButtonContainer><i className="fas fa-cart-plus"></i> Shopping Cart</ButtonContainer>
                    </Link>
                </li>
                </ul>
            </div>
         </div>
        </NavWrapper>
    )
}


export default Navbar