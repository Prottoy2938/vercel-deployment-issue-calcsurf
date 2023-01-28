// Example from https://beta.reactjs.org/learn

import { useState, useEffect } from "react";
import molarcalc from "molarcalc";
import useScript from "../usescript";
import Head from "next/head";
import { Helmet } from "react-helmet";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  useScript();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://embed.planetcalc.com/widget.js?v=4183";
    script.async = true;

    const planetCalcContainer = document.getElementById("planetcalc-container");
    console.log(planetCalcContainer);
    // document.body.appendChild(script);

    return () => {
      // document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <button onClick={handleClick}>
        Clicked {count} times {}
      </button>
      <div>
        <a
          href="https://planetcalc.com/328/"
          data-lang="en"
          data-code=""
          data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004"
          data-v="4183"
        >
          PLANETCALC, Molar mass of the substance
        </a>
        <div id="planetcalc-container">
          {/* <script src="https://embed.planetcalc.com/widget.js?v=4183"></script> */}
        </div>
        <div>
          <iframe src="https://plif.vercel.app/" height="500px" width="500px" />
        </div>
      </div>
      {/* <Helmet>
        <div>
          <a
            href="https://planetcalc.com/328/"
            data-lang="en"
            data-code=""
            data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004"
            data-v="4183"
          >
            PLANETCALC, Molar mass of the substance
          </a>
          <script src="https://embed.planetcalc.com/widget.js?v=4183"></script>
        </div>
      </Helmet> */}
      {/* <Head>
        <div>
          <a
            href="https://planetcalc.com/328/"
            data-lang="en"
            data-code=""
            data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004"
            data-v="4183"
          >
            PLANETCALC, Molar mass of the substance
          </a>
          <script src="https://embed.planetcalc.com/widget.js?v=4183"></script>
        </div>
      </Head> */}
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
