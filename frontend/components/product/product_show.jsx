import React from 'react';
import { Link } from 'react-router-dom';


class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getProduct(this.props.productId)
    }


    render(){  
        let product= "broken"  
        if (this.props.product){
            product=
            <div className="product-show">
                <img src={this.props.product.image_url}/>
                <ul className="product-show-list">
                    <li id="product-show-title">{this.props.product.title}</li>
                    <li id="border-bottom-link"><Link to="/products">Visit the Amazone Store</Link></li>
                    <li>Price: <div>${(this.props.product.price) / 100}</div> <h1>(${(this.props.product.price) / 100}/ Count)</h1><img src={window.freeURL}></img></li>
                    <div id="product-show-list-link"><Link to={`/product/${this.props.product.id}`}>Get $70 off instantly: Pay ${(this.props.product.price)/100} upon approval for the Amazon Prime Rewards Visa Card. No annual fee.</Link></div>
                    <div>{this.props.product.description.split(",  ").map(desc=>(
                        <li id="product-show-description">{desc}</li>
                    ))}</div>
                    <h3><Link to={`/product/${this.props.product.id}`}>Compare with similar Items</Link></h3>
                </ul>
                <div>

                </div>
            </div>
        }
                
        return (
            <div>
                {product}
            </div>
        )
    } 
}

export default ProductShow;