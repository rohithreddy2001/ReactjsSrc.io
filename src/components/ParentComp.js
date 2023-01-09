import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rohith'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Rohith'
            })
        }, 2000);
    }
    

  render() {
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp
