import React, { useContext } from "react";
import CounterContext from "../../contexts/CounterContext";
import GrandChild from "./GrandChild";

export default function Child() {
  //   const context = useContext(CounterContext);
  //   console.log(context);

  const { counter, decrease, increase } = useContext(CounterContext);

  return (
    <div>
      <h1>{counter}</h1>
      <GrandChild />
    </div>
  );
}
