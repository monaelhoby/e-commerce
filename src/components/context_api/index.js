import React, {Component, createContext} from "react";
import {storeProducts, detailProduct} from "../../data";


export const StoreContext = createContext();

class StoreProvider extends Component {

state = {
    allProducts : [],
    productDetails : detailProduct,
    cart : [],
    modalOpen : false,
    modalproduct:detailProduct,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0,
    cartcount:0
};

componentDidMount () {
    this.setProducts();
}

setProducts = () => {   //copy of array not refrence
    let products = [];
    storeProducts.forEach(item => {
        const singleItem = {...item};
        products = [...products,singleItem]
    });
    this.setState({allProducts:products})
}

getItem = id => {
    const product = this.state.allProducts.find(item => item.id === id);
    return product
} 

handleDetail = id => {
    const product = this.getItem(id);
    this.setState({productDetails:product})
};

addToCart = id => {
    let products = [...this.state.allProducts];
    const product = this.getItem(id);
    product.inCart=true;
    product.count = product.count + 1;
    const price = product.price;
    product.total=price;
    this.setState( () => {
        return {allProducts:products,cart:[...this.state.cart,product]}
    },() => this.addTotals()
        )
}

openModal = id => {
    const product = this.getItem(id);
    this.setState({modalproduct:product, modalOpen: true})
}

closeModal = () => {
    this.setState({modalOpen: false})
}

increment = id => {
    const itemcart = this.state.cart.find(item => item.id === id);
    itemcart.count = itemcart.count + 1;
    itemcart.total = itemcart.count * itemcart.price;
    this.setState(() => ({cart:[...this.state.cart]}) , () => (this.addTotals()));
}

decrement = id => {
    const itemcart = this.state.cart.find(item => item.id === id);
    if(itemcart.count > 0){
        itemcart.count = itemcart.count - 1;
        itemcart.total = itemcart.count * itemcart.price;
        this.setState(() => ({cart:[...this.state.cart]}) , () => (this.addTotals()))
    }else{
        this.removeItem(id)
    }
}

removeItem = id => {
    const newcart = this.state.cart.filter(item => item.id !== id);
    newcart.inCart=false;
    newcart.count = 0;
    newcart.total=0;
    this.setState(() => ({cart:newcart}) , () => (this.addTotals()));
}

clearCart = id => {
    this.setState(() => ({cart:[]}), () => (this.setProducts()))  // to have copy of array not refrence
}

addTotals = () => {
    let cartSubtotal = 0;
    this.state.cart.map(item => cartSubtotal += item.total);
    const temptax = cartSubtotal * .1 ;
    const tax = parseFloat(temptax.toFixed(2));
    const total = cartSubtotal + tax ;
    this.setState({
        cartSubtotal : cartSubtotal,
        cartTax : tax ,
        cartTotal : total
    })
}

    render (){
        return(
            <StoreContext.Provider 
                    value={{...this.state,
                    handleDetail:this.handleDetail,
                    addToCart:this.addToCart,
                    openModal: this.openModal,
                    closeModal:this.closeModal,
                    increment:this.increment,
                    decrement:this.decrement,
                    removeItem:this.removeItem,
                    clearCart:this.clearCart
                    }}>
                {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export const StoreConsumer = StoreContext.Consumer;

export default StoreProvider

