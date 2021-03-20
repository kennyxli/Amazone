import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getProducts()
    }
    handleClick(e){

    }

    render(){
        debugger
        let product = "broken"
        if (this.props.products) {
            product =
                <div className="product-container">{this.props.products.map((product, idx)=>(
                    <div key={idx} className="inner-container">
                        <Link to={`/product/${product.id}`}><img className='product-image' src={product.image_url} /></Link>
                        <li className='product-title'>{product.title}</li>
                        <li>1 count (Pack of 1)</li>
                        <li>${(product.price) / 100}(${(product.price)/100}/Count)</li>
                    </div>
                ))}
                </div>
        }
        return (
            <div>{product}</div>
        )
    }
}

