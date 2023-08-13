import React, { Component } from "react";

export default class UserRefClass extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.userNameRef.current.style.color = "red";
        console.log(this.userNameRef.current.value, this.passwordRef.current.value);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">UserName</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="username"
                            ref={this.userNameRef}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            ref={this.passwordRef}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
