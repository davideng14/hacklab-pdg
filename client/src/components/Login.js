import React from 'react';

const login = () => {
    return (
        <section>
            <main>
                <div className="container">
                    <section>
                        <img class="img" src="./img/OnHire-07.png" alt=""/><br/>
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