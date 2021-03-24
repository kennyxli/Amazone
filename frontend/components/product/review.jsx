import React from 'react'
import ReactStars from "react-rating-stars-component"
import { removeReview } from '../../actions/review_action'

export default class Review extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }

    }
    componentDidMount(){
        // this.props.clearReview()
        // this.props.requestReviews(this.props.product.id)
        
    }
   




    render(){
        
        let num1 = 0;
        let num2 = 0;
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
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
       let body = ''
        
        if (this.props.reviews){
            num = this.props.reviews.length
            body = 
            <div className='review-body'>
                <h1>Top reviews from the United States</h1>
                {this.props.reviews.map((review,idx)=>(
                    <div key={idx + review.id}>
                        {/* <h2>{review.user.name}</h2> */}
                        <h2><ReactStars
                            key={this.props.reviews}
                            count={5}
                            value={parseInt(review.stars)}
                            edit={false}
                            size={14}
                            isHalf={true}
                            activeColor="#FFA41C"
                        /><div>{review.title}</div></h2>
                        <h4>Reviewed in the United States</h4>
                        <h3>{review.body}</h3>
                    </div>
                    ))}
            </div>
                }

                return(
                <div className='review-container'>
                <div className='review-sidebar'>
                <h2 key={this.props.product.id}>
                    <ReactStars
                        count={5}
                        value={parseInt(this.props.product.avg_rating.toFixed(2))}
                        edit={false}
                        size={24}
                        isHalf={true}
                        activeColor="#FFA41C"
                    /> <p>{this.props.product.avg_rating.toFixed(2)} out of 5</p></h2>
                    <h3>{num} global rating</h3>
                    <ul>
                        <li><a href="">5 star<button><input type="submit" className="inner-review-button" style={{ width: `${(num5 / num) * 100}%` }} value="" /></button>{Math.floor((num5 / num) * 100)}%</a></li>
                        <li><a href="">4 star<button><input type="submit" className="inner-review-button" style={{ width: `${(num4 / num) * 100}%` }} value="" /></button>{Math.floor((num4 / num) * 100)}%</a></li>
                        <li><a href="">3 star<button><input type="submit" className="inner-review-button" style={{ width: `${(num3 / num) * 100}%` }} value="" /></button>{Math.floor((num3 / num) * 100)}%</a></li>
                        <li><a href="">2 star<button><input type="submit" className="inner-review-button" style={{ width: `${(num2 / num) * 100}%` }} value="" /></button>{Math.floor((num2 / num) * 100)}%</a></li>
                        <li><a href="">1 star<button><input type="submit" className="inner-review-button" style={{ width: `${(num1 / num) * 100}%` }} value="" /></button>{Math.floor((num1 / num) * 100)}%</a></li>
                    </ul>
                    <a href="">How are ratings calculated?</a>
                </div>
                {body}
            </div>
        )
        
    }
}
