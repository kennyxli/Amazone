import React from 'react'
import SignupContainer from "./session/signup_container"
import LogInContainer from "./session/login_container"
import {Route} from 'react-router-dom'
import NavBarContainer from "./navbar/navbar_container"
import LowerNavBar from "./navbar/lower_navbar"
import {AuthRoute} from "../util/route_utils"
import Body from "./body/body"
import Footer from "./footer/footer"
export default () => (
    <div >
        <div id='app-cont'>
            <Route exact path="/" component={NavBarContainer}/>
            <Route exact path="/" component={LowerNavBar} />
            <Route exact path="/" component={Body}/>
        </div>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LogInContainer}/>
        <Route path="/" component={Footer}/>
    </div>
)