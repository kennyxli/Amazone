import { connect } from 'react-redux';

import { receiveSearch } from '../../actions/product_action';
import Body from './body';

const mDTP = dispatch => ({
    receiveSearch: (title) => dispatch(receiveSearch(title))
});

export default connect(null, mDTP)(Body);