import React, { useState } from "react";

const CounterContext = React.createContext();

export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    setCounter(counter - 1);
  };

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        decrease,
        increase,
      }}
    >
      {props.children}
    </CounterContext.Provider>
  );
};
export default CounterContext;
