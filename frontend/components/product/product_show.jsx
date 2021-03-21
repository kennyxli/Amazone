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
            <div>
                <img src={this.props.product.image_url}/>
                <li>{this.props.product.title}</li>
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