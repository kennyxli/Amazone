import React from 'react'
import SignupContainer from "./session/signup_container"
import LogInContainer from "./session/login_container"
import {Route} from 'react-router-dom'
import NavBarContainer from "./navbar/navbar_container"
import LowerNavBarContainer from "./navbar/lower_navbar_container"
import {AuthRoute} from "../util/route_utils"
import BodyContainer from "./body/body_container"
import Footer from "./footer/footer"
import ProductShowContainer from "./product/product_show_container"
import ProductIndexContainer from "./product/product_index_container"
import ReviewFormContainer from "./product/review_form_container"
import CartContainer from "./cart/cart_container"

export default () => (
    <div >
        <div id='app-cont'>
            <Route path="/" component={NavBarContainer}/>
            <Route exact path="/" component={LowerNavBarContainer} />
            <Route exact path="/" component={BodyContainer}/>
        </div>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LogInContainer}/>
        <Route path="/product/:productId" component={LowerNavBarContainer}/>
        <Route exact path="/product/:productId" component={ProductShowContainer}/>
        <Route path="/product/:productId/review" component={ReviewFormContainer}/>
        <Route exact path="/products/" component={LowerNavBarContainer} />
        <Route exact path="/products/" component={ProductIndexContainer} />
        <Route exact path="/" component={Footer}/>
        <div id="cart-cont">
            <Route exact path="/cart/" component={LowerNavBarContainer} />
            <Route exact path="/cart/" component={CartContainer} />
            <Route exact path="/cart" component={Footer}/>
        </div>
    </div>
)