import {types} from "./actions";
import {storeProducts, detailProduct} from "../../data";


const initialState ={   modalproduct:detailProduct,
                        productDetails : detailProduct,
                        allProducts : storeProducts,
                        cart : [],
                        modalOpen : false,
                        cartSubtotal:0,
                        cartTax:0,
                        cartTotal:0,
                        cartcount:0
                    }


const Reducer = (initialState, action) => {
  switch(action.types){
      case types.handleDetails :
          return console.log("mona")
  }
}

export default Reducer