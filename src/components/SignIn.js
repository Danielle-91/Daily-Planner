function SignIn() {
    return (
        <>
            <section className="signIn">
                <div className="signInHeader">
                    <h1>Welcome to your Daily Planner</h1>
                </div>

                <div className="loginBox">
                    <form action="" method="POST" name="signIn">
                        <label htmlFor="logIn" className="loginPrompt">Please Sign In</label>
                        <label htmlFor="username" className="sr-only">Enter your name:</label>
                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            required="true" />

                        <label htmlFor="password" className="sr-only">Enter your password:</label>
                        <input type="text"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required="true" />

                        <button type="submit">Log In</button>
                    </form>

                </div>
            </section>


        </>
    )
}

export default SignIn;