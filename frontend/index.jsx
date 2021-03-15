import React from "react";
import ReactDOM from "react-dom";
import {login, signup} from "./util/session_api_util"
import Root from './components/root'
import configureStore from './store/store'

window.signup = signup
window.login = login
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store = configureStore()
    window.getState = store.getState

    ReactDOM.render(<Root store={store}/>, root);
});
