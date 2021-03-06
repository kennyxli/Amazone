import React from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show: false
        }
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleDelete(e,id){

        e.preventDefault()
        this.props.deleteCartItem(id)
    }
    
    handleDestroy(e){
        
        e.preventDefault
        this.props.deleteCart()
        this.setState({
            show: true
        })
    }
    handleChange(e, productId, id){
        // let value = document.getElementById("cart-select").value
        console.log(e.target.value)
        this.props.updateCartItem({product_id: productId, quantity: e.target.value}, id)
    }
    render(){
        let checkout = ""
        if (this.state.show){
            checkout = 
            <div className="purchase-message">
                Thank you for your purchase!
            </div>
        }
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
                    <span style={{marginTop: "4px"}}>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</span>
                </p>
            </div>
        )
        
        let subtotal = 0;
        {this.props.cartItems.forEach(cartitem=>{
            subtotal += cartitem.quantity * cartitem.price
        })}
        let quantity = 0;
        {this.props.cartItems.forEach(cartitem=>{
            quantity += cartitem.quantity
        })}
        

        
        const cart = () => (
            <div style={{display: "flex", marginBottom: "500px"}}>
                <div className='signin-cart-cont'>
                    <h1 >Shopping Cart</h1>
                    <div>{this.props.cartItems.map((cartItem,idx) => (
                        <div key={idx} className="cart-product">
                            <Link to={`/product/${cartItem.product_id}`}><img className='cart-image' src={cartItem.image_url} /></Link>
                            <div className="cart-title-cont">
                                <Link to={`/product/${cartItem.product_id}`} className="cart-title">{cartItem.title}</Link>
                                <p>In Stock</p>
                                <span className="cart-shipped">Shipped from: <Link to="/">Amazone</Link></span>
                                <span className="cart-gift">Gift options not available.</span>
                                <div>
                                    <select defaultValue={'DEFAULT'} id="cart-select" onChange={(e) => this.handleChange(e, cartItem.product_id, cartItem.id)}>
                                        <option value="DEFAULT" disabled hidden>Qty: {cartItem.quantity}</option>
                                        <option value="1">Qty: 1</option>
                                        <option value="2">Qty: 2</option>
                                        <option value="3">Qty: 3</option>
                                        <option value="4">Qty: 4</option>
                                        <option value="5">Qty: 5</option>
                                        <option value="6">Qty: 6</option>
                                        <option value="7">Qty: 7</option>
                                        <option value="8">Qty: 8</option>
                                        <option value="9">Qty: 9</option>
                                    </select>
                                    <button className="cart-delete" onClick={(e) => this.handleDelete(e,cartItem.id)}>Delete</button>
                                </div>
                            </div>
                            <div className="cartitem-price">
                                ${cartItem.price/100}
                            </div>
                        </div>
                    ))}
                    </div>
                            <div className="cart-subtotal">
                                Subtotal <span> ({quantity} Items):<span className="inner-cart-subtotal"> ${subtotal/100}</span></span>
                            </div>
                    </div>
                    <div className="outer-cart-checkout">
                    <div className="cart-checkout">
                        Subtotal <span> ({quantity} Items):<span className="inner-cart-subtotal"> ${subtotal/100}</span></span>
                        <button className="cart-checkout-button" onClick={this.handleDestroy}>Proceed to checkout</button>
                    </div>
                    </div>
            </div>
        )

        const empty = () => (
             <div>
                 {checkout}
                <div className="cart-cont" style={{marginBottom: "400px"}}>
                    <div className="cart-inner-cont" >
                        <img src={window.emptyCartURL} id="empty-cart"></img>
                        <div>
                            <div className="empty-title">Your Amazone Cart is empty</div>
                            <Link to="/products" className="cart-shopping-link">Continue shopping.</Link>
                        </div>
                    </div>
                </div>
                </div>
        )
        if (this.props.currentUser){
            if (this.props.cartItems.length > 0){
                return cart()
            }else{
                return empty();
            }
        }else{
            return signin();
        }      
        
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