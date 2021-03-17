import React from 'react'


const CartIcon = (props) => {
    return (
        <div className='outerReturn'>
            <button id="returnbutton">
                <img src={window.carticonURL}></img>
            </button>
        </div>
    )

}

export default CartIcon