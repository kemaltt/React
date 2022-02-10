import React, { useContext } from "react";
import CounterContext from "../../contexts/CounterContext";

export default function GreatGrandChild() {
  const { increase } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increase}>increase</button>
    </div>
  );
}
