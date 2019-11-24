import React from 'react';
import './Logins.scss';
import logo from '../assets/logo.png';

const Login = () => {
    return (
        <section>
            <div className="loginContainer">
                <section>
                    <img className="img" src={logo} alt=""/><br/>
                    <label>User</label> <br/>
                    <input type="text" placeholder="User"/><br/>
                    <label>Password</label><br/>
                    <input type="text" placeholder="Password"/><br/>
                    <button class="button">Login</button>
                </section>
            </div>
            <a href="/"><p>Sign up</p></a>
    </section>
    )
}

export default Login;