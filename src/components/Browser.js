import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetMovies";
import VideoContainer from "./VideoContainer";

export default function Browser() {
  useGetNowPlayingMovies();
  return (
    <div>
      <Header />
      <VideoContainer/>
    </div>
  );
}
