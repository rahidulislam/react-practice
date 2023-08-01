import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: "bn-BD"
        };
    }
    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    handleClick=(locale)=>{
        this.setState({local:locale})

    }
    render() {
        const {date, locale} =this.state
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
                <Button change={this.handleClick} locale="en-US"/>
            </div>
        );
    }
}
