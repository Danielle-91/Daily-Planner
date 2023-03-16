import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = console.log('submitted');
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // await register(form);

    // }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} >
                <label for="email">Email</label>
                <input type="text"
                    placeholder="email" id="mail"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })} />
                <br />
                <label for="password">Password</label>
                <input type="password" placeholder="Password"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })} />
                <br />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Register;
