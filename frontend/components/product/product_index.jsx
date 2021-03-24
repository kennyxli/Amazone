import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component"

export default class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // this.props.getProducts()
        
    }

    handleClick(e){

    }
    getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
    }

    
    render(){
        let arrCount = []
        let product = "broken"
        if (this.props.products) {

            product =
                <div className="product-container">{this.props.products.filter((val)=>{
                    if (this.props.search == ""){
                        arrCount.push(val)
                        return val
                    } else if (val.title.toLowerCase().includes(this.props.search.toLowerCase()) || val.category.toLowerCase().includes(this.props.search.toLowerCase())){
                        arrCount.push(val)
                        return val
                    }
                }).map((product, idx)=>(
                    <div key={idx} className="inner-container">
                        <Link to={`/product/${product.id}`}><img className='product-image' src={product.image_url} /></Link>
                        <ul className="description">
                        <Link to={`/product/${product.id}`} className='product-title'>
                            <li className='product-title'>{product.title}</li>
                        </Link>
                        <Link to={`/product/${product.id}`}className="product-price">
                                <h2 key={idx + product.id} id="react-stars">
                                    <ReactStars
                                    count={5}
                                    value={product.avg_rating ? product.avg_rating.toFixed(2) : 0}
                                    edit={false}
                                    size={16}
                                    isHalf={true}
                                    activeColor="#FFA41C"/>
                                    
                                </h2>
                             <li className="product-price">${(product.price) / 100}</li>
                        </Link>
                        <li className="product-delivery"><img className="product-prime"src={window.primeURL}></img> FREE Delivery </li>
                        <li className="more-buying">More Buying Choices</li>
                        <li className='price-offer'>${(product.price) / 100 }
                            <Link to={`/product/${product.id}`} className='offer-link'>
                                ({product.quantity} used & new offers)
                            </Link>
                        </li>
                        
                        </ul>
                    </div>
                ))}
                </div>
        }
        return (
            <div>
                <h1 id="search-result"><div>1-{arrCount.length} of {arrCount.length} results for</div> <p> "{this.props.search}"</p></h1>
                {product}
            </div>
        )
    }
}

