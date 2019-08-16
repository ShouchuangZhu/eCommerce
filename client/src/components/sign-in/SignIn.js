import React, { Component } from 'react';
import './signin.scss'
import Form from '../form-input/Form'
import CustomButton from '../custom-button/Custom-button'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange = e => {
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Form name="email" 
                          type = "email" 
                          label="email" 
                          value = {this.state.email} 
                          handleChange={this.handleChange} 
                          required />

                    <Form name="password" 
                          type = "password" 
                          label="password" 
                          value = {this.state.password} 
                          handleChange={this.handleChange} 
                          required />

                    <CustomButton type = "submit">Sign In</CustomButton> 
                    {/* If the type is submit it will automatically call the form submit function */}
                </form>
            </div>
        );
    }
}

export default SignIn;