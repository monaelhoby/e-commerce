import React from 'react';
import {StoreConsumer} from "../context_api";
import styled from "styled-components";
import {ButtonContainer} from "../navbar/style";
import {Link} from "react-router-dom";


const Modal = () => {
    return(
    <StoreConsumer>
        { value => {
            const {modalOpen, closeModal} = value;
            const {img, price, title} = value.modalproduct;
            if(modalOpen){
                return <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                <h5>Item Added</h5>
                                <img className="img-fluid" height="70%" width="70%" src={img} alt="product"/>
                                <h5>{title}</h5>
                                <h5 className="text-muted">Price : ${price}</h5>
                                <Link to="/">
                                  <ButtonContainer onClick={() => closeModal()}>All  Product</ButtonContainer>
                                </Link>
                                <Link to="/cart">
                                  <ButtonContainer cart onClick={() => closeModal()}>Cart</ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
            }else{
                return null
            }
        }}
    </StoreConsumer>
    
    )
}


export default Modal


const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0,
    right:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    display:flex;
    align-items:center;
    justify-content:enter;
    #modal{
        background: var(--mainWhite);
        padding:40px;
    }
`;