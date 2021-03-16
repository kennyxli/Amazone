import React from 'react'


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

    render () {
        
        return (
            <div>
                
            <a href=""><img src={window.brentURL} className="logo" onClick={this.handleLogo}></img></a>
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
                            <input className="signupinput" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label >
                        <label className="signup-param">Password
                        <br />
                            <input className="signupinput" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    </div>
                    <button className="signupbutton">Create your Amazone account</button>
                </form>
                    <p className="cond">By creating an account, you agree to Amazone's<br/> Conditions of Use and Privacy Notice.</p>
                    <div id="cont"><p className="already">Already have an account? <a href="" onClick={this.handleRedirect}>Sign-In</a></p></div>
            </div>
            </div>
        )
    }
}