import { connect } from 'react-redux'
import { login, resetErrors } from '../../actions/session'
import Login from './login'

const mSTP = (state) => {
    return {
        errors: state.errors.session,
    };
};

const mDTP = (dispatch) => ({
    login: user => dispatch(login(user)),
    reset: () => dispatch(resetErrors())
})

export default connect(mSTP, mDTP)(Login)