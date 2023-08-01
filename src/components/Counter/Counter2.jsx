import React, { Component } from "react";

export default class Counter2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    handleClick = () => this.setState({ count: this.state.count + 1 });
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}
