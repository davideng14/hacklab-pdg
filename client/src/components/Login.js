import React from 'react';
import '_Login.module.scss'


const login = () => {
    return (
        <section>
            <main>
                <div className="container">
                    <section>
                        <img class="img" src={Logo} alt=""/><br/>
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

export default Login