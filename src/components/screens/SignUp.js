import React, { useState } from "react";
import UserPool from "../../UserPool.js";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = event => {
        event.preventDefault();

        UserPool.SignUp(email, password, [], null, (err, data) => {
        if(err){
            console.log("SignUp:", err);
        }
        console.log(data);
        })

    };



    return(
        <React.Fragment>
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)}>
                    </input>

                    <label htmlFor="password">
                        Password
                    </label>
                    <input value={password} onChange={(event) => setPassword(event.target.value)}>
                    </input>
                    <button type="submit">
                    Sign Up
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SignUp;