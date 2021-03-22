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

    }

    handleRedirect(e,num){
        e.preventDefault()
        this.props.history.push(`/product/${num}`)
    }

    render(){
        return (
            <div>
            <ul id="product-list">
                <li className="product-list-item"><p className='title'>Our Best Seller</p>
                    <img onClick={(e) => this.handleRedirect(e, 9)} className='product-list-image' src={window.yogaURL} ></img><br/>
                    <a href="" onClick={(e) => this.handleRedirect(e, 9)} className="product-link">Shop now</a>
                </li>
                    <li className="product-list-item"><p className='title'>Number 1 Rated</p>
                        <img onClick={(e) => this.handleRedirect(e, 1)} className='product-list-image' src={window.theraURL} ></img><br />
                        <a onClick={(e) => this.handleRedirect(e, 1)} href="" className="product-link">Check it out</a>
                </li>
                <li className="product-list-item"><p className='title'>Workout at Home</p>
                <img onClick={(e) => this.handleClick(e, "Resistance Bands")} className='product-list-image' src={window.fitURL} ></img><br/>
                <a href="" onClick={(e) => this.handleClick(e, "Resistance Bands")} className="product-link">Take a look</a>
                </li>
                    <li className="product-list-item"><p className='title'>Our Favorite</p>
                    <img className='product-list-image' src={window.blenderURL} ></img><br />
                    <a href="" className="product-link">Shop favorite</a>
                </li>
            </ul>
             <ul id="lower-product-list">
                <li className="product-list-item"><p className='title'>The Perfect Gift</p>
                    <img className='product-list-image' src={window.giftURL} ></img><br />
                    <a href="" className="product-link">Come unwrap</a>
                </li>
                <li className="product-list-item"><p className='title'>A Classic From Us</p>
                    <img className='product-list-image' src={window.classicURL} ></img><br />
                    <a href="" className="product-link">Shop classic</a>
                </li>
                <li className="product-list-item"><p className='title'>Customers' Most Loved</p>
                    <img className='product-list-image' src={window.yogamatURL} ></img><br/>
                    <a href="" className="product-link">Check out the most loved</a>
                </li>
                <li className="product-list-item"><p className='title'>Newest Release</p>
                    <img className='product-list-image' src={window.bandsURL} ></img><br />
                    <a href="" className="product-link">See whats new</a>
                </li>
            </ul>
            </div>
        )
    }
}