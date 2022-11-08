import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    const {signIn} = useAuth()

    const fromPage = location.state?.from?.pathname || navigate('/');
    console.log(fromPage) //url откуда пришел

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.userName.value;

        signIn(user, () => {
            navigate(fromPage, {replace: true})
        })
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name='userName'/>
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export { Login };