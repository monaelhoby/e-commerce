
export const types = {
    handleDetails : 'HANDLE_DETAILS',
    addToCart : 'ADD_TO_CART ',
    openModal : 'OPEN_MODAL' ,
    closeModal : 'CLOSE_MODAL' ,
    increment : 'INCREMENT' ,
    decrement : 'DECREMENT' ,
    removeItem : 'REMOVE_ITEM' ,
    clearCart : 'CLEAR_CART' ,
    addTotals : 'ADD_TOTALS'
}

// action 

const Actions = {
    handleDetailsAction : id => ({
        type : types.handleDetails,
        id
    }),
    addToCartAction : id => ({
        type : types.addToCart,
        id
    }),
    openModalAction : id => ({
        type : types.openModal,
        id
    }),
    closeModalAction : () => ({
        type : types.closeModal
    }),
    incrementAction : id => ({
        type : types.increment,
        id
    }),
    decrementAction : id => ({
        type : types.decrement,
        id
    }),
    removeItemAction : id => ({
        type : types.removeItem,
        id
    }),
    clearCartAction : () => ({
        type : types.clearCart
    }),
    addTotalsAction : () => ({
        type : types.addTotals
    })
}

export default Actions


