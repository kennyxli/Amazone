import React from 'react'
import ReactStars from "react-rating-stars-component"

export default class Review extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }

    }
    componentDidMount(){
        this.props.requestReviews(this.props.product.id)
        
    }




    render(){
        
        let num5 = 0;
        let num4 = 0;
        let num3 = 0;
        let num2 = 0;
        let num1 = 0;
        let totalNum = 0;

        this.props.reviews.forEach((review) => {
            if (review.stars === 5) {
                num5 += 1;
                totalNum += 5;
            } else if (review.stars === 4) {
                num4 += 1;
                totalNum += 4;
            } else if (review.stars === 3) {
                num3 += 1;
                totalNum += 3;
            } else if (review.stars === 2) {
                num2 += 1;
                totalNum += 2;
            } else if (review.stars === 1) {
                num1 += 1;
                totalNum += 1;
            }
        })


       let num =0 
        
        if (this.props.reviews){
            num = this.props.reviews.length
        }
        return(
            <div className='review-container'>
                <div className='review-sidebar'>
                    <h1>Customer reviews</h1>
                    <h2>{this.props.product.avg_rating.toFixed(2)} out of 5</h2>
                    <h3>{num} global rating</h3>
                    <ul>
                        <li><a href="">5 star<button></button>{(num5 / num) * 100}%</a></li>
                        <li><a href="">4 star<button></button>{(num4 / num) * 100}%</a></li>
                        <li><a href="">3 star<button></button>{(num3 / num) * 100}%</a></li>
                        <li><a href="">2 star<button></button>{(num2 / num) * 100}%</a></li>
                        <li><a href="">1 star<button></button>{(num1 / num) * 100}%</a></li>
                    </ul>
                    <a href="">How are ratings calculated?</a>
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