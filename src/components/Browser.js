import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetMovies";
import VideoContainer from "./VideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

export default function Browser() {
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <VideoContainer />
      <SecondaryContainer />
    </div>
  );
}
