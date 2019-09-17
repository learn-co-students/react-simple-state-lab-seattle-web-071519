
import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props)
        // ...define initial state with a key of 'color' set to the 'value' prop
        this.state = {
            color: this.props.value
        }
      }

    setColor = () => {
        const newColor = '#333'
        this.setState({
            color: newColor
        })
    }

    render (){
        return <div style={{backgroundColor: this.state.color}}onClick={this.setColor} className='cell'>{this.props.values}</div>
    }
}

export default Cell