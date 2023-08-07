import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
export default function Form(props) {
    // const [user, setUser] = useState({ name: "", email: "", password: "" });
    // const { name, email, password } = user;

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name must be at least 2 characters").required,
            email: yup.string().email().required,
            password: yup.string().min(6).required
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values:""})
        }
    });
    // const handleChange = (e) => {
    //     console.log(e.target.name);
    //     setUser({ ...user, [e.target.name]: e.target.value });
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form is clicked");
    //     console.log(user);
    // };
    // const data = "I am from child data";
    // props.onChildData(data);
    return (
        <div>
            <h1>Form</h1>
            <form action="" onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <button type="Submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
