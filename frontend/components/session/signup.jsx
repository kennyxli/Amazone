import React from 'react'
import { GoTriangleRight} from 'react-icons/go'

export default class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            name:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
        this.handleLogo = this.handleLogo.bind(this);
        this.handleLink = this.handleLink.bind(this)
    }
    componentDidMount() {
        this.props.reset()
    }

    handleInput(key) {
        return e => this.setState({ [key]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.signup(this.state)
            .then(()=> this.props.history.push('/'))
    }
    handleRedirect(e) {
        e.preventDefault()
        
        this.props.history.push('/login')
    }
    handleLogo(e) {
        e.preventDefault()
        this.props.history.push('/')
    }
    handleLink(e){
        e.preventDefault()
        this.props.history.push('/signup')
    }
    renderErrors() {
        if(this.props.errors.length <= 1){
            return (
                <ul>
                    {this.props.errors.map((error, idx) => (
                        
                        <div key={idx} className='errors'>
                            <img id='ex' src={window.exURL}></img>
                            <p className="innerError" id='problem'>There was a problem</p>
                            <p className="innerError" >
                                {error}
                            </p>
                        </div>
                    ))}
                </ul>
            )
        }else{
            let arr = []
            return(
                <ul>
                    <div className="errors long-errors">
                    <img id='ex' src={window.exURL}></img>
                    <p className="innerError long-innerError" id='problem'>There was a problem</p>
                    <p className="innerError long-innerError" >
                    {this.props.errors.map((error, idx) => {
                            return <div>- {error}</div>
                    })}
                        </p>
                                
                    </div>
                    
                </ul>
            )
        }
    }

    render () {
        
        return (
            <div className='outer-cont'> 
            <a href=""><img src={window.brentURL} className="logo" onClick={this.handleLogo}></img></a>
            <div>{this.renderErrors()}</div>
            <div className="session-form">
                <h2 className="createacc">Create account</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-cont">
                    <label className="signup-param">Your name
                    <br/>
                        <input className="signupinput" type="text" value={this.state.name} onChange={this.handleInput('name')} />
                    </label>
                        <label className="signup-param">Email
                        <br />
                            <input className="signupinput" type="email" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label >
                        <label className="signup-param">Password
                        <br />
                            <input className="signupinput" type="password" value={this.state.password} placeholder=" At least 6 characters" onChange={this.handleInput('password')}/>
                            <div id ='clause'><p id="i"> i </p>  Passwords must be at least 6 characters. </div>
                    </label>
                    </div>
                    <button className="signupbutton">Create your Amazone account</button>
                </form>
                    <p className="cond">By creating an account, you agree to Amazone's<br /><li id='break'> <a target="_blank" href="https://www.linkedin.com/in/kenny-li-793b6b15b/" className="form-hyperlink">Conditions of Use</a> and <a className="form-hyperlink" target="_blank" href="https://www.linkedin.com/in/kenny-li-793b6b15b/">Privacy Notice.</a></li></p>
                    <div id="cont"><p className="already">Already have an account? <a href="" onClick={this.handleRedirect} className="form-hyperlink">Sign-In <GoTriangleRight className="triangle-icon"/></a></p></div>
            </div>
            </div>
        )
    }
}