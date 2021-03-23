import React from 'react'
import ReactStars from "react-rating-stars-component"

export default class Review extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }

    }

    // handleRating(newRating){

    // }

    render(){

        return(
            <div>
                <div>
                    <h1>Customer reviews</h1>
                    {/* <h2>{this.props.product.reviews}</h2> */}
                </div>
            </div>
        )
        
    }
}
{/* <ReactStars
    count={5}
    // onChange={handleRating}
    size={24}
    activeColor="#ffd700"
/> */}