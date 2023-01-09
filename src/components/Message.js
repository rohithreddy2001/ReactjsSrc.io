import React from "react";
import { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            Message: "Hello Viewer"
        }
    }

    changeMessage() {
        this.setState(
            {
                Message: "Thank You Subscriber"
            }
        )
    }
    
    render() {
        return (
            <div>
                <h1>
                    {this.state.Message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }
}

export default Message