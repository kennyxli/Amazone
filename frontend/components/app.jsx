import React from 'react'
import SignupContainer from "./session/signup_container"
import LogInContainer from "./session/login_container"
import {Route} from 'react-router-dom'
import NavBarContainer from "./navbar/navbar_container"
import LowerNavBar from "./navbar/lower_navbar"
import {AuthRoute} from "../util/route_utils"
import Body from "./body/body"
import Footer from "./footer/footer"
import ProductShowContainer from "./product/product_show_container"
import ProductIndexContainer from "./product/product_index_container"

export default () => (
    <div >
        <div id='app-cont'>
            <Route exact path="/" component={NavBarContainer}/>
            <Route exact path="/" component={LowerNavBar} />
            <Route exact path="/" component={Body}/>
        </div>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LogInContainer}/>
        <Route path="/product" />
        <Route path="/product/:productId" component={NavBarContainer}/>
        <Route path="/product/:productId" component={LowerNavBar}/>
        <Route path="/product/:productId" component={ProductShowContainer}/>
        <Route exact path="/products/" component={NavBarContainer} />
        <Route exact path="/products/" component={LowerNavBar} />
        <Route exact path="/products/" component={ProductIndexContainer} />
        <Route exact path="/" component={Footer}/>
    </div>
)