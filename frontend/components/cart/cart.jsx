import React from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component{

    render(){
        const signin = () => (
            <div>
                <div className="cart-cont">
                    <div className="cart-inner-cont">
                        <img src={window.emptyCartURL} id="empty-cart"></img>
                        <div>
                            <div className="empty-title">Your Amazone Cart is empty</div>
                            <Link to="/login" className="cart-signin">Sign in to your account</Link>
                            <Link to="/signup" className="cart-signup">Sign up now</Link>
                        </div>
                    </div>
                </div>
                <div className="lower-cart-cont">

                </div>
                <p className="cart-clause">
                    The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
                    <p style={{marginTop: "4px"}}>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                </p>
            </div>
        )
        const cart = () => (
            <div>
                <div className='signin-cart-cont'>
                    <h1>Shopping Cart</h1>
                </div>
            </div>
        )

        return this.props.currentUser ? cart() : signin();
        // return(
        //     <div>
        //         <div>
        //             <span>{this.props.user[0].name}</span>
        //         </div>
        //         <div>
        //             Your Amazone Cart is empty.
                    
        //         </div>
        //     </div>
        // )
    }
}