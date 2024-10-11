import React from "react";
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetMovies";
import VideoContainer from "./VideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchComponent from "./SearchComponent";
import { useSelector } from "react-redux";

export default function Browser() {
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <SearchComponent />
      ) : (
        <>
          <VideoContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}
