import { connect } from 'react-redux'
import { login } from '../../actions/session'
import Login from './login'



const mDTP = (dispatch) => ({
    login: user => dispatch(login(user))
})

export default connect(null, mDTP)(Login)