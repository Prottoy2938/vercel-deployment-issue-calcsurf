// Example from https://beta.reactjs.org/learn

import React from "react";

function CalcComponent({ calcNum, lang }) {
  return (
    <div>
      <div>
        <iframe
          src={`https://plif.vercel.app?calcNum=${calcNum}&lang=${lang}`}
          height="500px"
          width="500px"
        />
      </div>
    </div>
  );
}

export default CalcComponent;
