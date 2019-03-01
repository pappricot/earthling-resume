import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

const changingText = ["Works?", "Works!", "WooHoo!"];
let index = 0;
export default function hookDynamicText() {
  const [changingName, setName] = useState("let's change");
  const timeInterval = useRef({});
  const name = useTypewriter(changingName);
  useEffect(() => {
    timeInterval.current = setInterval(() => {
      index = index + 1 > 2 ? 0 : ++index + 1;
      setName(changingText[index]);
    }, 5000);
    return function clear() {
      clearInterval(timeInterval.current);
    };
  }, [changingName]);
  return (
    <div className="App">
      <h3>{name}</h3>
    </div>
  );
}
