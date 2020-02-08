import React, {useState, useEffect} from "react";
import {storeProducts} from "../data";


const FunctionImplementation = () => {
    
const [allproducts, setAllProducts] = useState([]);


useEffect( () => {
    setProducts()
},[])
//copy of array not refrence
const setProducts = () => {   
    let products = [];
    storeProducts.forEach(item => {
        const singleItem = {...item};
        products = [...products,singleItem]
    });
    return setAllProducts([products])
}

return (
    <div></div>
)
}

export default FunctionImplementation