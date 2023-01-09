import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }  
    }
    

  render() {
    
    // 1st approach
    // if(this.state.isLoggedIn) {
    //     return <div>Hello Rohith</div>
    // } else {
    //     return <div>Hello Guest</div>
    // }
    // return (
    //   <div>
    //     <div>Welcome Rohith</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )

    // 2nd approach
    // let message
    // if(this.state.isLoggedIn) {
    //     message = <div>Hello Rohith</div>
    // } else {
    //     message = <div>Hello Guest</div>
    // }

    // return <div>{message}</div>

    // 3rd approach
    return (
        this.state.isLoggedIn ? <div>Hello Rohith</div> : <div>Hello Guest</div>
    )

    // 4th approach (it works for only True)
    // return this.state.isLoggedIn && <div>Hello Rohith</div> 
  }
}

export default UserGreeting
