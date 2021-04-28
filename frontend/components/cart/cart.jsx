import React from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component{

    render(){
        const signin = () => (
            <div className="cart-cont">
                <div>
                    <img src={window.emptyCartURL} id="empty-cart"></img>
                    <div>Your Amazone Cart is empty</div>
                    <button>Sign in to your account</button>
                    <button>Sign up now</button>
                </div>
            </div>
        )

        return this.props.currentUser ? welcome() : signin();
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