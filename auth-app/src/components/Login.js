import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return(
            <div>
                <h1>Log In</h1>
                <form>
                    <input required placeholder='username' name='username' value={this.state.username} onChange={this.handleChanges}></input>
                    <input required placeholder='password' name='password' value={this.state.password} onChange={this.handleChanges}></input>
                    <button>Log In</button>
                </form>
            </div>
        )
    }

    handleChanges = event => {
        this.setState({ 
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    login = event => {
        event.preventDefault()
        const endpoint = `http://localhost:3300/api/login`
        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token)
            this.props.history.push('/api/jokes')
        })
        .catch(err => {
            console.error(err)
        })
    }
}