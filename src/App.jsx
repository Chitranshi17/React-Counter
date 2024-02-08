import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

const App = () => {

  const [countValue , setCountValue] = useState(10);

  const increaseValue = () => {
    setCountValue(countValue + 1);
    console.log(countValue)
  }
  const decreaseValue = () => {
    if(countValue>0){
      setCountValue(countValue - 1);
    }
    console.log(countValue)
  }

  const resetValue = () => {
    setCountValue(0);
  }


  return (
    <>
     <Navbar/>
     <Main countValue={countValue} increaseValue={increaseValue} decreaseValue={decreaseValue} resetValue={resetValue}/>
    </>
  );
};

export default App;
