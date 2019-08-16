import React, { Component } from 'react';
import './signin.scss'
import Form from '../form-input/Form'
import CustomButton from '../custom-button/Custom-button'
import { signInWithGoogle } from '../../firebase/firebaseUtils'

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
                    <div className='button'>
                        <CustomButton type = "submit">Sign In</CustomButton> 
                        <CustomButton onClick= {signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton> 
                        {/* If the type is submit it will automatically call the form submit function */}
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;