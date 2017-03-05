import React, { Component } from "react"

class ItemSubRedditImage extends Component{

  constructor(props){
    super(props)
    this.state={error: false}
  }

  handlerError(event){
    this.setState({error: true});
  }

  render(){
    if (this.state.error){
      return null;
    }else{
      return (
        <img className="img-thumbnail img-post" src={this.props.image}
        onError={this.handlerError.bind(this)} alt="post item"/>
      )
    }
  }
}

export default ItemSubRedditImage
