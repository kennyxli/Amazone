import { connect } from 'react-redux';

import { receiveSearch, getProducts } from '../../actions/product_action';
import LowerNavbar from './lower_navbar';

// const mSTP = (state) => {
//     // let user = null;
//     // if (state.session.currentUser){
//     //     user = state.entities.users[Object.keys(state.session.currentUser)]
//     // }


//     return {
        
//     };
// };

const mDTP = dispatch => ({
    receiveSearch: (title) => dispatch(receiveSearch(title)),
    getProducts: () => dispatch(getProducts())
});

export default connect(null, mDTP)(LowerNavbar);

