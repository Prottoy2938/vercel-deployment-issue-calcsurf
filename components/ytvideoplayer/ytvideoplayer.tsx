import React from "react";
import YouTube from "react-youtube";

// vidCode: string

const YTVideoPlayer = ({ vidCode }) => {
  return <YouTube videoId={vidCode} />;
};

export default YTVideoPlayer;
