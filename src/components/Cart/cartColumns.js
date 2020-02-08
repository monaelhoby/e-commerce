import React from 'react';
import Actions from "../../store/actions";


const CartColumns = ({value}) => {
    return (
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="text-capitalize">Product</th>
            <th scope="col" className="text-capitalize">Name Of Product</th>
            <th scope="col" className="text-capitalize">Price</th>
            <th scope="col" className="text-capitalize">Quantity</th>
            <th scope="col" className="text-capitalize">Remove</th>
            <th scope="col" className="text-capitalize">Total</th>
          </tr>
        </thead>
        <tbody>
            {value.cart.map((product,index) => {
                return(
                <tr key={product.id}>
                    <th scope="row">{index +1}</th>
                    <td><img src={product.img} width="30%" /></td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <i className="far fa-minus-square cartIcon" onClick={() => value.dispatch(Actions.decrementAction(product.id))}></i>
                            <span className="count">{product.count}</span>
                        <i className="far fa-plus-square cartIcon" onClick={() => value.dispatch(Actions.incrementAction(product.id))}></i>
                    </td>
                    <td>
                        <i className="fas fa-trash-alt cartIcon remove" onClick={() => value.dispatch(Actions.removeItemAction(product.id))}></i>
                    </td>
                    <td>{product.total}</td>
                </tr>
                )
                })
            }
        </tbody>
      </table>
    )
}

export default CartColumns