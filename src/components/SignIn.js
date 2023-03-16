import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials);
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <section className="signIn">
                <div className="signInHeader">
                    <h1>Welcome to your Daily Planner</h1>
                </div>

                <div className="loginBox">
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

                    <p>Don't have an account? <a href="#">Register here</a></p>

                </div>
            </section>


        </>
    )

}

export default SignIn;