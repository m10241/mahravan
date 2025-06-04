'use client'
import React,{ useState } from 'react';

const InfoForm = () => {
    const [infos, setInfos] = useState({
        firstName: '',
        lastName: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInfos((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Input information:', infos);
        setSubmitted(true);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                                firstName:
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                value={infos.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            lastName:
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            value={infos.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
              
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </form>

{ submitted && (

<div>
<h2> submitedInfo:</h2>
</div>

)}


                </div>
            </div>
        </div>
    );
};

export default InfoForm;