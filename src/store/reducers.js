
import {detailProduct,storeProducts} from "../data";
import {types} from "./actions";

export const state = {
    allProducts: storeProducts,
    productDetails : detailProduct,
    cart : [],
    modalOpen : false,
    modalproduct:detailProduct,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0,
    cartcount:0
}

const getItem = id => {
    const product = state.allProducts.find(item => item.id === id);
    return product
} 

const Reducer = (state, action) => {

    const addTotals = () => {
        let cartSubtotal = 0;
        state.cart.map(item => cartSubtotal += item.total);
        const temptax = cartSubtotal * .1 ;
        const tax = parseFloat(temptax.toFixed(2));
        const total = cartSubtotal + tax ;
        state.cartSubtotal = cartSubtotal ;
        state.cartTax = tax ;
        state.cartTotal = total;
        return {...state,...state.cartSubtotal,...state.cartTax,...state.cartTotal }
    }

    switch(action.type){
        case types.handleDetails :
            const product = getItem(action.id);
            state.productDetails = product;
             return {...state, ...state.productDetails};

        case types.addToCart :
            const productcart = getItem(action.id);
            productcart.inCart=true;
            productcart.count = productcart.count + 1;
            const price = productcart.price;
            productcart.total=price;
            state.cart = [...state.cart,productcart]
            addTotals();
            return{...state, ...state.cart}

        case types.openModal :
            const productModal = getItem(action.id);
            state.modalproduct = productModal;
            state.modalOpen = true ;
            return {...state,...state.modalproduct,...state.modalOpen}

        case types.closeModal :
            state.modalOpen = false ;
            return {...state,...state.modalOpen}

        case types.increment :
            const itemcart = state.cart.find(item => item.id === action.id);
            itemcart.count = itemcart.count + 1;
            itemcart.total = itemcart.count * itemcart.price;
            addTotals();
            return {...state, ...state.cart};
            
        case types.decrement :
            const itemcart2 = state.cart.find(item => item.id === action.id);
            if(itemcart2.count > 0){
                itemcart2.count = itemcart2.count - 1;
                itemcart2.total = itemcart2.count * itemcart2.price;
                addTotals();
                return {...state, ...state.cart};
            }else{
                const removecart = state.cart.filter(item => item.id !== action.id);
                    removecart.inCart=false;
                    removecart.count = 0;
                    removecart.total=0;
                    state.cart = removecart;
                    return {...state, ...state.cart};
            }

        case types.removeItem : 
                const removecart2 = state.cart.filter(item => item.id !== action.id);
                removecart2.inCart=false;
                removecart2.count = 0;
                removecart2.total=0;
                state.cart = removecart2;
                addTotals();
                return {...state, ...state.cart};

        case types.clearCart : 
            state.cart = [];
            return {...state, ...state.cart};

        case types.addTotals : 
            addTotals();

        default :
        return state
    }
}

export default Reducer