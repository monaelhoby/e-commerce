import React, {Component} from 'react';
import Title from "../titles/title";
import CartColumns from './cartColumns';
import EmptyCart from "./emptyCart";
import Card from "./cartList";
import {StoreConsumer} from "../context_api/index";

class Cart extends Component {
    render () {
        return(
            <div className="cart">
            <div className="container-fluid">
                <StoreConsumer>
                    {value => {
                        if(value.cart.length > 0){
                            return <section>
                                        <Title name="Your" title="Card" />
                                        <div className="row">
                                            <div className="d-md-block text-center col-md-8">
                                                <CartColumns value={value}/>
                                            </div>
                                            <div className="d-md-block text-center col-md-4">
                                                <Card value={value}/>
                                            </div>
                                        </div>
                                    </section>
                        }else{
                            return <EmptyCart />
                        }
                    }}
                </StoreConsumer>
                </div>
            </div>
        )
    }
}


export default Cart