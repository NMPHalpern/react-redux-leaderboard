import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../actions/index"


const mapDispatchToProps = dispatch => {
  return {
    incrementCount: target => dispatch(incrementCount(target)),
    decrementCount: target => dispatch(decrementCount(target))
  }
}

class ConnectedChoice extends Component {
  constructor(props){
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount(){
    this.props.incrementCount(this.props.name);
  }

  decrementCount(){
    this.props.decrementCount(this.props.name);
  }

  getCountClass(){
    let rtnClass = "bg-warning";
    if (this.props.total > 0){
      rtnClass = "bg-success";
    } else if (this.props.total < 0){
      rtnClass = "bg-danger";
    }
    return rtnClass;
  }

  render(){
    return(
        <div id={this.props.name.toLowerCase()} >
          <i className="fas fa-arrow-down" onClick={this.decrementCount}></i>
          <span className='choice'>{this.props.name}</span>
          <i className="fas fa-arrow-up" onClick={this.incrementCount}></i>
        </div>
    );
  }
}

const Choice = connect(null, mapDispatchToProps)(ConnectedChoice);
export default Choice;
