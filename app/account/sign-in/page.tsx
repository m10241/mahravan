'use client'
import { useState } from 'react';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        usernameOrEmail: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement your login logic here
        console.log('Login attempt with:', credentials);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="usernameOrEmail" className="form-label">
                                Username or Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="usernameOrEmail"
                                name="usernameOrEmail"
                                value={credentials.usernameOrEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;