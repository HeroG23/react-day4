import React, { Component } from 'react'
import './App.css'
import data from './Data'
import UserInfo from './UserInfo'
import Buttons from './Buttons'


class App extends Component {
  constructor(){
    super();
    this.state ={
      data: data,
      userNumber: 0
    }
  }
  inscreaseNum = ()=>{
    if(this.state.userNumber === 24){
    this.setState({
      userNumber: 0
    })
  }else{
    this.setState({
      userNumber:this.state.userNumber + 1
    })
  }}

  decreaseNum = ()=>{
    if(this.state.userNumber=== 0){
    this.setState({
      userNumber: 24
    })
  }else{
    this.setState({
      userNumber:this.state.userNumber -1
    })
  }
}
  render() {
    const{data, userNumber} = this.state
    return (
      <div>
        <header>
          <h2>Home</h2>
        </header>
        <body>
          <div className="content">
            <UserInfo user={data[userNumber]}/>
            <Buttons increase={this.inscreaseNum} decrease={this.decreaseNum}/>
          </div>
        </body>        
      </div>
    )
  }
}

export default App
