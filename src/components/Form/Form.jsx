import React, { useState } from "react";

export default function Form(props) {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const { name, email, password } = user;
    const handleChange = (e) => {
        console.log(e.target.name);
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form is clicked");
        console.log(user);
    };
    const data = "I am from child data"
    props.onChildData(data)
    return (
        <div>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="Submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
