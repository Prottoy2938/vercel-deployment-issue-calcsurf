// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import molarcalc from "molarcalc"
import useScript from "../usescript"
function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  useScript()


  return (
    <div>
      <button onClick={handleClick} >
        Clicked {count} times {}
      </button>
      <div><a href="https://planetcalc.com/2829/" data-lang="en" data-code="" data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004" data-v="4177">PLANETCALC, Density of oil</a><script src="https://embed.planetcalc.com/widget.js?v=4177"></script></div>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
