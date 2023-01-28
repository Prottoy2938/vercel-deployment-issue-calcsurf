import { useEffect } from 'react';

const useScript = (calcNum, lang) => {
  useEffect(() => {
    const div = document.createElement('div');
    var str = '<div><a href="https://planetcalc.com/2829/" data-lang="en" data-code="" data-colors="#263238,#435863,#090c0d,#fa7014,#fb9b5a,#c25004" data-v="4177">PLANETCALC, Density of oil</a><script src="https://embed.planetcalc.com/widget.js?v=4177"></script></div>';

    var temp = document.createElement('div');
    temp.innerHTML = str;
    

    document.body.appendChild(div);

    return () => {
      document.body.removeChild(div);
    }
  }, [calcNum]);
};

export default useScript;