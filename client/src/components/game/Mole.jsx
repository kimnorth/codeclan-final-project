import React, { Component } from 'react'

class Mole extends React.Component {

  constructor(props){
    super(props)
    this.moleID = this.props.id
  }

  // canSeeMolesUpProps(){
  //   console.log(this.moleID)
  //   // const props = this.props.visible[0].mole1
  // }

  // componentWillMount(){
  //   this.canSeeMolesUpProps()
  // }



  render(){

    // const moleCss = "visible-mole"

    // // If this.props.visible === false
    // // Set moleCss.style.display to none
    // // Else if this.props.visible === true
    // // Set moleCss.style.display to initial    class={ moleCSS }

    // this.props.visible

    // moleCss

    return (

    <div id="mole-div">
      <img id={this.props.id} className="mole-image" src="mole.png" onClick={this.props.handleMoleClick} />
    </div>

    )
  }

}


export default Mole;