import React from 'react'

export default class ProductList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <ul id="product-list">
                <li className="product-list-item"><p className='title'>Best Seller</p>
                    <img className='product-list-image' src={window.yogaURL} ></img><br />
                    <a href="" className="product-link">Take a look</a>
                </li>
                <li className="product-list-item"><p className='title'>Our Favorite</p>
                    <img className='product-list-image' src={window.blenderURL} ></img><br />
                    <a href="" className="product-link">Check it out</a>
                </li>
                <li className="product-list-item"><p className='title'>Workout at home</p>
                    <img className='product-list-image' src={window.fitURL} ></img><br/>
                    <a href="" className="product-link">Take a look</a>
                </li>
                <li className="product-list-item"><p className='title'>Number 1 Rated</p>
                    <img className='product-list-image' src={window.bandsURL} ></img><br />
                    <a href="" className="product-link">Take a look</a>
                </li>
            </ul>
        )
    }
}