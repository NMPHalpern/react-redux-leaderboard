import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../actions/index"
import Choice from "./Choice"

const mapStateToProps = state => {
  return { votes: state.votes.sort((a, b) => { a.total - b.total }) };
}

class ChoiceListComp extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div id="choice_container">
      { this.props.votes.map((vote, index) => {
          return <Choice name={vote.name} total={vote.total} key={index} />;
        }) }
      </div>
    );
  }
}

const ChoiceList = connect(mapStateToProps)(ChoiceListComp);
export default ChoiceList;
