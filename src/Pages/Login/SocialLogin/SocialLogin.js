import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

export const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const form = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(res.user)

                }).then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                    })
                // navigate(form, { replace: true })
            })
            .then(error => console.error(error));
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className=' btn btn-success'>Google Sign In</button>
        </div>
    )
}
