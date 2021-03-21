import React from 'react'


const CartIcon = (props) => {
    return (
        <div className='outerReturn'>
            <button id="returnbutton">
                <img id='cart-icon'src={window.carticonURL}></img><p id='cart-number'>0</p>
            </button>
        </div>
    )

}

export default CartIcon