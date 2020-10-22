import React, { Component } from 'react'

class Buttons extends Component {
    render(){
        return (
            <div className="buttonsContainer">
                <button className="previous" onClick={this.props.decrease}>Previous</button>
                <div>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                    <button className="new">New</button>
                </div>
                <button className="next" onClick={this.props.increase}>Next</button>
            </div>
        )
    }
}
export default Buttons
