import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {changeText && <p>Changed</p>}
      {!changeText && <Output>good to see you</Output>}
      <button onClick={changeTextHandler}>
        {changeText ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Greeting;
