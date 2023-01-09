import React, { Component } from 'react'
import './LifeCycleB'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rohith'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }
    
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps,PrevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Rohith Reddy'
        })
    }
    
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
