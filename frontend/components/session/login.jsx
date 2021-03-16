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

    render() {
        return (
            <div className="session-form">
                <h2 className="createacc">Sign-In</h2>
                <form>
                    <div className="signup-cont">
                    <label className="signup-param">Email:
                        <input
                            className="signupinput"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>

                    <label className="signup-param">Password:
                        <input
                            className="signupinput"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>Log In!</button>
                        <button onClick={this.handleRedirect}>Create your Amazone account</button>
                    </label>
                    </div>
                </form>

            </div>
        );
    }
}

export default Login;