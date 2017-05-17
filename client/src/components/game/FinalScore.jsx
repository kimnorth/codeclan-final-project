import React, { Component } from 'react'

class FinalScore extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    return (

    <div>
      
      <p>{this.props.winningPlayer} wins!</p>

    </div>

    )
  }

}


export default FinalScore;