import { useState } from "react";

function SignIn(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <label htmlFor="password" className="sr-only">Enter your password:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                        <button type="submit" disabled={!validateForm()}>Log In</button>
                    </form>

                </div>
            </section>


        </>
    )
}

export default SignIn;