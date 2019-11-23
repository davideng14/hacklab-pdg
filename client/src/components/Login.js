import React from 'react';
import './_Login.module.scss';
import logo from '../assets/logo.png';

const Login = () => {
    return (
        <section>
            <main>
                <div className="container login-form">
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
            </main>
    </section>
    )
}

export default Login;