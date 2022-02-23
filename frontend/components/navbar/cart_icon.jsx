import React from 'react'
import { Link } from 'react-router-dom';

function CartIcon(props){
    let quantity = 0
    props.cartItems.forEach((cartitem) => {
        quantity += cartitem.quantity
    })
    return (
        <div className='outerReturn'>
            <Link style={{textDecoration:"none"}} to="/cart" id="returnbutton">
                <img id='cart-icon'src={window.carticonURL}></img><p id='cart-number'>{quantity}</p>
            </Link>
        </div>
    )
}

export default CartIcon