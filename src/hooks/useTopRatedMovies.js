import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_CONSTANTS } from "../utils/constanst";
import { useEffect } from "react";

export default function useTopRatedMovies() {
  const dispatch = useDispatch();
  async function fetchMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_CONSTANTS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTopRatedMovies(response.results)))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
