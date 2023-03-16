import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const Auth = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });

        // removes listener
        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('user signed out');
        }).catch(error => console.log(error))
    }

    return (
        <>
            <div>
                <>
                    {authUser ?
                        <p>{`Signed In as ${authUser.email}`}</p> : <p>Signed Out</p>}
                    <button onClick={userSignOut}>Sign Out</button>

                </>
            </div>
        </>

    )
}

export default Auth;