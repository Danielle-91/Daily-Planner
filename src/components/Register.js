import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister} >
                <label htmlFor="logIn" className="loginPrompt">Create Your Account</label>
                <label htmlFor="email" className="sr-only">Enter your email:</label>
                <input type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password" className="sr-only">Enter your password:</label>
                <input type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}

                />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Register;
