import React from "react";
import ReactDOM from "react-dom";
import {login, signup, logout} from "./util/session_api_util"
import Root from './components/root'
import configureStore from './store/store'

window.signup = signup
window.login = login
window.logout = logout
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser){
        preloadedState = {
            entities:{
                users: {
                   [window.currentUser.id] : window.currentUser
                }
            },
            session: {
                currentUser: window.currentUser.id}
            
        }
    }
    let store = configureStore(preloadedState)
    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});
