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
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }
    handleRedirect(e){
        e.preventDefault()
        this.props.history.push('/signup')
    }
    handleLogo(e) {
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <a href=""><img src={window.brentURL} className="logo" onClick={this.handleLogo}></img></a>
            <div className="signin-form">
                <h2 className="signacc">Sign-In</h2>
                <form>
                    <div className="login-cont">
                    <label className="login-param">Email:  <br/>
                        <input
                            className="signupinput"
                            type="text"
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
                        <button id="signbutton"  onClick={this.handleSubmit}>Log In!</button>
                    </label>
                        <p className="signcond">By continuing, you agree to Amazone's Conditions of <br /> Use and Privacy Notice.</p>
                    </div>
                </form>
            </div>
            <p id="new">-------------------------- New to Amazone? -------------------------</p>
            <button id="redirect-button" onClick={this.handleRedirect}>Create your Amazone account</button>
            </div>
        );
    }
}

export default Login;