import React, { Component } from 'react'

class Buttons extends Component {
    render(){
        return (
            <div className="buttonsContainer">
                <button className="forward-backward" onClick={this.props.decrease}>&lt; Previous</button>
                <div>
                    <button className="editors">Edit</button>
                    <button className="editors">Delete</button>
                    <button className="editors">New</button>
                </div>
                <button className="forward-backward" onClick={this.props.increase}>Next &gt;</button>
            </div>
        )
    }
}
export default Buttons
