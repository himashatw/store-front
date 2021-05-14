import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../services/firebase';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth?.user.email === 'abishekmanusha@gmail.com') {
                    history.push("/items")
                } else {
                    history.push("/")
                }
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://i.ibb.co/jJgQ8Sx/e6e77824dea74970952f086c1807ffed.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit">Sign In</button>
                </form>

                <button onClick={register}>Create a new account</button>
            </div>
        </div>
    );
};

export default Login;