import React from 'react';
import { Link } from 'react-router-dom';
import ReviewContainer from './review_container'


class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getProduct(this.props.productId)
    }
    handleClick(e, key){
        this.props.history.push(key)
    }

    render(){  
        
        let loc= ""
        if (this.props.currentUser){
            
            loc = <li id="product-show-loc"><img style={{ 'width': '16px', 'height': '18px' }} src={window.wlocURL}></img><h4><Link to=""> Deliver to {this.props.currentUser.name} - New York 10002</Link></h4></li>
        }
        let button= ""
        if (this.props.currentUser){
            button = 
            <li style={{display: 'flex', 'flex-direction':'column'}}>
            <select className="product-show-select">
                <option value="1" selected="selected">Qty: 1</option>
                <option value="2">Qty: 2</option>
                <option value="3">Qty: 3</option>
                <option value="4">Qty: 4</option>
                <option value="5">Qty: 5</option>
                <option value="6">Qty: 6</option>
                <option value="7">Qty: 7</option>
                <option value="8">Qty: 8</option>
                <option value="9">Qty: 9</option>
            </select>
            <button className='product-sidebar-button'>Add to Cart</button>
            <button className='product-sidebar-button lower-button'>Buy Now</button>
            </li>
        }else{
           button= <li style={{display: 'flex', 'flex-direction':'column'}}>
            <button className='product-sidebar-button' onClick={(e)=> this.handleClick(e,'/signup')}>Sign up</button>
            <button className='product-sidebar-button lower-button' onClick={(e) => this.handleClick(e, '/login')}>Sign In</button>
            </li>
        }

        let product= "broken"  
        if (this.props.product){
            product=
            <div>
                <div className="product-show">
            
                    <img src={this.props.product.image_url}/>
                    <ul className="product-show-list">
                        <li id="product-show-title">{this.props.product.title}</li>
                        <li id="border-bottom-link"><Link to="/products">Visit the Amazone Store</Link></li>
                        <li>Price: <div>${(this.props.product.price) / 100}</div> <h1>(${(this.props.product.price) / 100}/ Count)</h1><img src={window.freeURL}></img></li>
                        <div id="product-show-list-link"><Link to={`/product/${this.props.product.id}`}>Get $5 off instantly: Pay ${(this.props.product.price-500)/100} upon approval for the Amazon Prime Rewards Visa Card. No annual fee.</Link></div>
                        <div>{this.props.product.description.split(",  ").map(desc=>(
                            <li id="product-show-description">{desc}</li>
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
            <ReviewContainer product={this.props.product}/>
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