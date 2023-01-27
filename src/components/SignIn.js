import { useState } from "react";
import { PropTypes } from "prop-types";

async function signInUser(credentials){
    return fetch('http://localhost:8080/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function SignIn({ setToken }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signInUser({
            email,
            password
        });
        setToken(token)
    }
    
    return (
        <>
            <section className="signIn">
                <div className="signInHeader">
                    <h1>Welcome to your Daily Planner</h1>
                </div>

                <div className="loginBox">
                    <form action="submit" name="signIn" onSubmit={handleSubmit}>
                        <label htmlFor="logIn" className="loginPrompt">Please Sign In</label>
                        <label htmlFor="email" className="sr-only">Enter your email:</label>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password" className="sr-only">Enter your password:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>

                        <button type="submit">Sign In</button>
                    </form>

                </div>
            </section>


        </>
    )

}
SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default SignIn;