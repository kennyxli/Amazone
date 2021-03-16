import React from 'react'
import SignupContainer from "./session/signup_container"
import LogInContainer from "./session/login_container"
import {Route} from 'react-router-dom'
import NavBarContainer from "./navbar/navbar_container"
import {AuthRoute} from "../util/route_utils"

export default () => (
    <div>
        <Route exact path="/" component={NavBarContainer}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LogInContainer}/>
    </div>
)