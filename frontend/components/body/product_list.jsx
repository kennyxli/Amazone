import React from 'react'
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick(e, title) {
        
        e.preventDefault()
        this.props.receiveSearch(title)
        this.props.history.push("/products")
        window.scrollTo(0, 0)
    }

    handleRedirect(e,num){
        e.preventDefault()
        this.props.history.push(`/product/${num}`)
        window.scrollTo(0, 0)   
    }

    render(){
        return (
            <div style={{height:'2000px'}}>
            <ul id="product-list">
                <li className="product-list-item"><p className='title'>Our Best Seller</p>
                    <img onClick={(e) => this.handleRedirect(e, 14)} className='product-list-image' src={window.yogaURL} ></img><br/>
                    <a href="" onClick={(e) => this.handleRedirect(e, 14)} className="product-link">Shop now</a>
                </li>
                <li className="product-list-item"><p className='title'>Number 1 Rated</p>
                    <img onClick={(e) => this.handleRedirect(e, 2)} className='product-list-image' src={window.theraURL} ></img><br />
                    <a onClick={(e) => this.handleRedirect(e, 2)} href="" className="product-link">Check it out</a>
                </li>
                <li className="product-list-item"><p className='title'>Our Favorite</p>
                    <img onClick={(e) => this.handleRedirect(e, 10)} className='product-list-image' src={window.blenderURL} ></img><br />
                    <a onClick={(e) => this.handleRedirect(e, 10)} href="" className="product-link">Shop favorite</a>
                </li>
                <li className="product-list-item"><p className='title'>The Perfect Gift</p>
                    <img onClick={(e) => this.handleRedirect(e, 9)} className='product-list-image' src={window.giftURL} ></img><br />
                    <a onClick={(e) => this.handleRedirect(e, 9)} href="" className="product-link">Come unwrap</a>
                </li>
            </ul>
             <ul id="lower-product-list">
                <li className="product-list-item"><p className='title'>Theraguns</p>
                    <img onClick={(e) => this.handleClick(e, "Theragun")} className='product-list-image' src={window.fitURL} ></img><br />
                    <a href="" onClick={(e) => this.handleClick(e, "Theragun")} className="product-link">Take a look</a>
                </li>
                
                <li className="product-list-item"><p className='title'>Blenders</p>
                    <img onClick={(e) => this.handleClick(e, "Blender")} className='product-list-image' src={window.classicURL} ></img><br />
                    <a onClick={(e) => this.handleClick(e, "Blender")} href="" className="product-link">Shop classics</a>
                </li>
                <li className="product-list-item"><p className='title'>Yoga Mats</p>
                    <img onClick={(e) => this.handleClick(e, "Yoga Mat")} className='product-list-image' src={window.yogamatURL} ></img><br/>
                    <a onClick={(e) => this.handleClick(e, "Yoga Mat")} href="" className="product-link">Check out the most loved</a>
                </li>
                <li className="product-list-item"><p className='title'>Resistance Bands</p>
                    <img onClick={(e) => this.handleClick(e, "Resistance Band")} className='product-list-image' src={window.bandsURL} ></img><br />
                    <a onClick={(e) => this.handleClick(e, "Resistance Band")} href="" className="product-link">See whats new</a>
                </li>
            </ul>
            </div>
        )
    }
}