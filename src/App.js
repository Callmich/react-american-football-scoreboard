//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);

  const lionTD = e => {
    setLionScore(lionScore + 7);
  };
  const lionFG = e => {
    setLionScore(lionScore + 3);
  };
  const tigerTD = e => {
    setTigerScore(tigerScore + 7);
  };
  const tigerFG = e => {
    setTigerScore(tigerScore + 3)
  }
  const scoreReset = e => {
    setLionScore(0);
    setTigerScore(0);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={lionTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={lionFG}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={tigerTD}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={tigerFG}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={scoreReset}className="awayButtons__touchdown">Reset Score</button>
        </div>

      
      </section>
    </div>
  );
}

export default App;
