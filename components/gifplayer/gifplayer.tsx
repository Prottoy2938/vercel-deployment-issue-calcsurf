import React from "react";

// - gifSrc: string
// - gifTitle: string
// - lang: string

const GifPlayer = ({ gifSrc, lang, gifTitle }) => {
  return <img src={gifSrc} alt={gifTitle} />;
};

export default GifPlayer;
