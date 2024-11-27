import React, { useState } from "react";

function Greeting() {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {changeText && <p>Changed</p>}
      {!changeText && <p>good to see you</p>}
      <button onClick={changeTextHandler}>
        {changeText ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default Greeting;
