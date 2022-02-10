import React, { useContext } from "react";
import CounterContext from "../../contexts/CounterContext";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild() {
  const { decrease } = useContext(CounterContext);
  return (
    <div className="">
      <button onClick={decrease}>decrease</button>
      <GreatGrandChild />
    </div>
  );
}
