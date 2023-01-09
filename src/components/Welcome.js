import React from 'react'
import { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name,id} = this.props
        return (
            <h1>
                Welcome {name} id = {id}
            </h1>
        ) 
    }
}

export default Welcome