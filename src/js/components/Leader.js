import React, { Component } from "react";
import { connect } from "react-redux";


export default class Leader extends Component {
  constructor(props){
    super(props);
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

  getLeaderClass(){
    return this.props.position === 0 ? "bold" : ""
  }

  render(){
    return(
        <div className={this.getCountClass()} id={this.props.name.toLowerCase()} >
          <span className={this.getLeaderClass(this) + ' choice'}>{this.props.name}</span>
          <span className="count">{this.props.total}</span>
        </div>
    );
  }
}
