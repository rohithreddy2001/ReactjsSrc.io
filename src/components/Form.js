import React, { Component } from 'react'
import './myStyles.css'


class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'React'
      }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value 
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    } 

    handleSubmit = event => {
        alert(`User Name: ${this.state.username}, Comment: ${this.state.comments}, Topic: ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <img src='https://png.pngtree.com/png-vector/20220619/ourmid/pngtree-secure-user-login-password-protected-png-image_5131485.png' alt='Img Not Found'></img>
        </div>
        <div>
            <label>User Name: </label>
            <input 
                type='text' 
                value={this.state.username} 
                onChange={this.handleUsernameChange}>
            </input>
        </div>
        <br></br>
        <div>
            <label>Comments: </label>
            <textarea 
                value={this.state.comments} 
                onChange={this.handleCommentsChange}>
            </textarea>
        </div>
        <br></br>
        <div>
            <label>Topic: </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value='React'>React</option>
                <option value='Angular'>Angular</option>
                <option value='Vue'>Vue</option>
            </select>
        </div>
        <br></br>
        <button className='formButton' type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
