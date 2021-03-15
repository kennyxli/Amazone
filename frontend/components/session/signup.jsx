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
    }
    handleInput(key) {
        return e => this.setState({ [key]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.signup(this.state)
            .then(()=> this.props.history.push('/'))
    }

    render () {
        return (
            <div className="session-form">
                <h2>Create account</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.handleInput('name')} />
                    </label>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <button>Create your Amazon account</button>
                </form>
            </div>
        )
    }
}