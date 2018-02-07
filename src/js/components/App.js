import React from "react";
import ChoiceList from "./ChoiceList"
import LeaderList from "./LeaderList"

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Vote</h2>
      <ChoiceList />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Leaderboard</h2>
      <LeaderList />
    </div>
  </div>
);

export default App;

