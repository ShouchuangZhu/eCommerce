import React from 'react'
import './sign.scss'
import SignIn from '../../sign-in/SignIn'
import SignUp from '../../sign-up/Signup'

const Sign = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Sign
