import React from 'react'
import ReactStars from "react-rating-stars-component"

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            stars: 0,
            user_id: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStar = this.handleStar.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ user_id: this.props.userId})
        this.props.createReview(this.props.productId , this.state)
            .then(() => this.props.history.push(`/product/${this.props.productId}`));
    }

    handleStar(value){
        debugger
        this.setState({stars: value})
    }

    render(){
        debugger
        let product= ''
        if (this.props.product){
           product=
           <ul>
           <div>
                <h3><img src={this.props.product.image_url}/></h3>
                <h2>{this.props.product.title}</h2>
            </div>
            <div>
                <h6>Overall rating
               
                <ReactStars
                        count={5}
                        size={30}
                        isHalf={false}
                        color='lightgray'
                        onChange={value => this.handleStar(value)}
                        activeColor="#FFA41C"
                    />
                </h6>
            </div>
            <div id="div-form-review">
                <form onSubmit={this.handleSubmit}>
                    <h5>Add a headline</h5>
                    <input value={this.state.title} placeholder="What's most important to know?" onChange={this.handleInput('title')}/>
                    <h6>Add a written review</h6>
                       <textarea onChange={this.handleInput('body')} placeholder="What did you like or dislike? What did you use this product for?" />

                    <button>Submit</button>
                </form>

            </div>
            </ul>
        }

        return (
            <div id="outer-review-form">
                <div id="inner-review-form">
                <h1>Create Review</h1>
                <h5>{product}</h5>
                </div>
            </div>
        )
    }
}