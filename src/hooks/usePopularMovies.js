import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_CONSTANTS } from "../utils/constanst";
import { useEffect } from "react";

export default function usePopularMovies() {
  const dispatch = useDispatch();
  async function fetchMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_CONSTANTS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovies(response.results)))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
