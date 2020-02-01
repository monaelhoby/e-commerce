import React from 'react';
import Product from "./product";
import Title from "../titles/title";
import {StoreConsumer} from "../context_api/index";


const ProductList = () => {
    return(
        <React.Fragment>
            <div className="py-5">
                <div className="container"> 
                    <Title name="our" title="product"/>
                        <div className="row">
                            <StoreConsumer>
                                {value => {
                                    return value.allProducts.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </StoreConsumer>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default ProductList