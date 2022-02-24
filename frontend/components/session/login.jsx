import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleLogo = this.handleLogo.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount(){
        this.props.reset()
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    handleDemo(e){
        e.preventDefault();
        this.props.login({email: 'guest@guest.com', password: 'password'})
    }
    
    handleRedirect(e){
        e.preventDefault()
        this.props.history.push('/signup')
    }

    handleLogo(e) {
        e.preventDefault()
        this.props.history.push('/')
    }

    handleLink(e) {
        e.preventDefault()
        this.props.history.push('/login')
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <div key={idx} className='errors'>
                        <img id='ex' src={window.exURL}></img>
                        <p className="innerError" id='problem'>There was a problem</p>
                        <p className="innerError" key={idx}>
                        {error}
                        </p>
                    </div>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='outer-cont'>
                <a href=""><img src={window.brentURL} className="logo" onClick={this.handleLogo}></img></a>
                <div>{this.renderErrors()}</div>
                <div className="signin-form">
                    <h2 className="signacc">Sign-In</h2>
                    <form>
                        <div className="login-cont">
                        <label className="login-param">Email:  <br/>
                            <input
                                className="signupinput"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label className="login-param">Password:
                            <input
                                className="signupinput"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <button className="signbutton"  onClick={this.handleSubmit}>Sign-In</button>
                            <button className="signbutton"  onClick={this.handleDemo}>Demo Sign-In</button>
                        </label>
                            <p className="signcond">By continuing, you agree to Amazone's 
                                <a target="_blank" href="https://www.linkedin.com/in/kenny-li-793b6b15b/" className="form-hyperlink">Conditions of <br /> Use</a> and 
                                <a target="_blank" href="https://www.linkedin.com/in/kenny-li-793b6b15b/" className="form-hyperlink">Privacy Notice.</a>
                            </p>
                        </div>
                    </form>
                </div>
                <p id="new"> New to Amazone? </p>
                <button id="redirect-button" onClick={this.handleRedirect}>Create your Amazone account</button>
            </div>
        );
    }
}

export default Login;