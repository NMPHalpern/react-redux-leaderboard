import React, { Component } from "react";
import { connect } from "react-redux";
import Leader from "./Leader"

const mapStateToProps = state => {
  return { votes: state.votes.sort((a, b) => { a.total - b.total }) };
}

class LeaderListComp extends Component {
  constructor(props) {
    super(props);
    this.getSortedList = this.getSortedList.bind(this);
    this.listCompare = this.listCompare.bind(this);
  }

  getSortedList(){
    return (
      this.props.votes.slice().sort((a, b) => this.listCompare(a, b))
    )
  }

  listCompare(a, b){
    if(a.total < b.total){
      return 1;
    } else if(a.total > b.total){
      return -1;
    } else {
      return 0;
    }
  }

  render(){
    return(
      <div id="choice_container">
      { this.getSortedList().map((vote, index) => {
          return <Leader name={vote.name} total={vote.total} key={index} position={index} />;
        }) }
      </div>
    );
  }
}

const LeaderList = connect(mapStateToProps)(LeaderListComp);
export default LeaderList;

