import {connect} from 'react-redux'
import {signup , resetErrors} from '../../actions/session'
import Signup from './signup'

const mSTP = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mDTP = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    reset: () => dispatch(resetErrors())
})

export default connect(mSTP, mDTP)(Signup)