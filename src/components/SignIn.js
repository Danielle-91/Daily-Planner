import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials);
            navigate('/planner')
        }).catch((error) => {
            setLoginError(true)
        })
    }
    
    return (
        <>
            <section className="signIn">
                <div className="signInHeader">
                    <h1>Welcome to your Daily Planner</h1>
                </div>

                <div className="formBox">
                    <form action="submit" name="signIn" onSubmit={handleSignIn}>
                        <label htmlFor="logIn" className="loginPrompt">Please Sign In</label>
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

                        <button type="submit">Sign In</button>
                    </form>

                    {loginError && <span>Incorrect username or password!</span>}

                    <p>Don't have an account? <Link to='/register'>Register here</Link></p>

                </div>

            </section>


        </>
    )

}

export default SignIn;