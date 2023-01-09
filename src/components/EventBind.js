import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this) //Binding in the constructor.
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Good Bye"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good Bye !'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding in the render. */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
        {/* Arrow Functions */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind
