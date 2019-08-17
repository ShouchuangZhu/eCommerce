import React, { Component } from 'react';
import Form from '../form-input/Form'
import CustomButton from '../custom-button/Custom-button'
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils'
import './signup.scss'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                    <Form type='text' 
                          name='displayName' 
                          value={displayName} 
                          onChange={this.handleChange}
                          label='Display Name'
                          required>
                    </Form>
                    <Form type='email' 
                          name='email' 
                          value={email} 
                          onChange={this.handleChange}
                          label='Email'
                          required>
                    </Form>
                    <Form type='password' 
                          name='password' 
                          value={password} 
                          onChange={this.handleChange}
                          label='Password'
                          required>
                    </Form>
                    <Form type='password' 
                          name='confirmPassword' 
                          value={confirmPassword} 
                          onChange={this.handleChange}
                          label='confirmPassword'
                          required>
                    </Form>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup;