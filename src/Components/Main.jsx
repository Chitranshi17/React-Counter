import React from "react";

const Main = ({countValue , increaseValue , decreaseValue , resetValue}) => {

 

  return (
    <main id="main">
      <div className="counterBox">
        <div className="topCounter">
          <div className="counterValue">
            <h3>{countValue}</h3>
          </div>
        </div>
        <div className="bottomCounter">
          <div className="counterBtn">
            <button className="btn" onClick={()=>increaseValue()}>Increase</button>
            <button className="btn" onClick={resetValue}>Reset</button>
            <button className="btn" onClick={()=>decreaseValue()}>Decrease</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
