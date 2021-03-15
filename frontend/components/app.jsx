import React from 'react'
import SignupContainer from "./session/signup_container"
import {Route} from 'react-router-dom'
import NavBarContainer from "./navbar/navbar_container"
export default () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
        <Route path="/signup" component={SignupContainer}/>
    </div>
)