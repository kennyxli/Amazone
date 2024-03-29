import React from 'react';
import { Link } from 'react-router-dom';
import ReviewContainer from './review_container'
import ReactStars from "react-rating-stars-component"

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state={placeHolder: 0}
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount(){
        this.props.getProduct(this.props.productId)
        this.props.requestReviews(this.props.productId)
        this.setState({placeHolder: 1})
       
    }

    handleClick(e, key){
        this.props.history.push(key)
    }

    handleAdd(e){
        let id = 0
        let value = document.getElementById("product-show-select").value
        let quantity = 0
        let that = this;
        this.props.cartItems.forEach((cartitem) => {
      
            if (that.props.productId === cartitem.product_id){
                id = cartitem.id
                quantity = cartitem.quantity
            } 
        })
        if (id > 0){
            
            let newValue = parseInt(value) + quantity
            this.props.updateCartItem({product_id:this.props.productId, quantity: newValue}, id)
            
        }else{
            this.props.addCartItem({product_id:this.props.productId, quantity: value})

        }

    }

    render(){  
        let loc= ""
        if (this.props.currentUser){
            loc = <li id="product-show-loc"><img style={{ 'width': '16px', 'height': '18px' }} src={window.wlocURL}></img><h4><Link to=""> Deliver to {this.props.currentUser.name} - New York 10002</Link></h4></li>
        }
        let button= ""
        if (this.props.currentUser){
            button = 
            <li style={{display: 'flex', 'flexDirection':'column'}}>
            <select id="product-show-select">
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
            <button className='product-sidebar-button' onClick={this.handleAdd}>Add to Cart</button>
            <Link to="/cart" className="buy-now-product"><button className='product-sidebar-button lower-button-buy' onClick={this.handleAdd}>Buy Now </button></Link>
            </li>
        }else{
           button= <li style={{display: 'flex', 'flexDirection':'column'}}>
            <button className='product-sidebar-button' onClick={(e)=> this.handleClick(e,'/signup')}>Sign up</button>
            <button className='product-sidebar-button lower-button' onClick={(e) => this.handleClick(e, '/login')}>Sign In</button>
            </li>
        }
        let product= ""  
        if (this.props.product){
            product=
            <div id="outer-product-show">
                <div className="product-show">
            
                    <img src={this.props.product.photo}/>
                    <ul className="product-show-list">
                        <li id="product-show-title">{this.props.product.title}</li>
                        <li ><Link to="/products">Visit the Amazone Store</Link></li>
                        <h2 key={this.props.product.id+this.props.product.stars} id="react-stars" className="long-react-stars border-bottom-link"><ReactStars
                            count={5}
                            key={this.props.product.id + this.props.product.avg_rating}
                            value={parseFloat(this.props.product.avg_rating.toFixed(2))}
                            edit={false}
                            size={17}
                            isHalf={true}
                            activeColor="#FFA41C"
                        /> </h2>
                        <li>Price: <div>${(this.props.product.price) / 100}</div> <h1>(${(this.props.product.price) / 100}/ Count)</h1><img src={window.freeURL}></img></li>
                        <div id="product-show-list-link"><Link to={`/product/${this.props.product.id}`}>Get $5 off instantly: Pay ${(this.props.product.price-500)/100} upon approval for the Amazon Prime Rewards Visa Card. No annual fee.</Link></div>
                        <div>{this.props.product.description.split(",  ").map((desc,idx)=>(
                            <li key={idx} id="product-show-description">{desc}</li>
                        ))}</div>
                        <h3><Link to={`/product/${this.props.product.id}`}>Compare with similar Items</Link></h3>
                    </ul>
                    <div>
                    </div>
                <div id="product-show-sidebar">
                    <ul>
                        <li><h1>${(this.props.product.price) / 100}</h1></li>
                        <li><img src={window.freeURL}></img></li>
                        <li className='free-delivery-clause'>FREE delivery: <h2 style={{'fontWeight': 'bold', 'marginLeft': '5px'}}>Tomorrow</h2></li> 
                        <li className='free-delivery-clause'> Order within 4 hrs and 1 min</li>
                        <li><Link to={`/product/${this.props.product.id}`}>Details</Link></li>
                        {loc} 
                        <li><h3>In Stock.</h3></li>
                        {button}
                        <li className="product-secure"><img src={window.lockURL}></img><Link to={`/product/${this.props.product.id}`} className="product-secure-link" >Secure transaction</Link></li>
                        <li className="product-secure-button">Ships From <div>Amazone</div></li>
                        <li className="product-secure-button">Sold by <Link to={`/product/${this.props.product.id}`} id="product-secure-link" >Amazone</Link></li>
                    </ul>
                </div>
            </div>
            <ReviewContainer product={this.props.product} />
         </div >
        }
        return (
            <div>
                {product}
            </div>
        )
    } 
}

export default ProductShow;