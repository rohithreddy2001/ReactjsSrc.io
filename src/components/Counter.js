import React, { Component } from 'react'

class Counter extends Component {
    //Snippets
    //rce is the shortcut for class blocks
    //rconst is the shortcut for constructor block

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('Callback value' ,this.state.count)
        // }
        // )

        this.setState((previousState) => ({
            count: previousState.count + 1
        }),
        () => {
            console.log('Callback value' ,this.state.count)
        }
        )
        console.log(this.state.count)
    }

    decrement() {
        // this.setState({
        //     count: this.state.count -1
        // },
        // () => {
        //     console.log('Callback value', this.state.count)
        // }
        // )
        this.setState((previousState) => ({
            count: previousState.count - 1
        }),
        () => {
            console.log('Callback value' ,this.state.count)
        }
        )
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.incrementFive()}>IncrementFive</button>

      </div>

    )
  }
}

export default Counter
