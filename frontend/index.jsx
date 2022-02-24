import React from "react";
import ReactDOM from "react-dom";
import {login, signup, logout} from "./actions/session"
import Root from './components/root'
import configureStore from './store/store'
import {getProduct, getProducts} from "./actions/product_action"
import { requestReviews, createReview, updateReview, destroyReview} from "./actions/review_action"

window.signup = signup
window.login = login
window.logout = logout
window.getProduct = getProduct
window.getProducts = getProducts
window.requestReviews = requestReviews
window.createReview = createReview
window.updateReview = updateReview
window.destroyReview = destroyReview



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
                currentUser: window.currentUser.id
            }
        }
    }
    let store = configureStore(preloadedState)
    window.getState = store.getState
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});
