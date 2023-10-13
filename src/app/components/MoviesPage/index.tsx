"use client";
import MovieCard from "../MovieCard";
import { ContainerMoviesPage } from "./styles";

import { useState, useEffect } from "react";

interface IMovie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  genre_ids: number[];
}

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const apiKey = "b716e119325a7aeeeff2782636710df3";
  const moviesURL = "https://api.themoviedb.org/3/movie/";

  const getMovies = async (moviesURL: string) => {
    const response = await fetch(moviesURL);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const popularMoviesURL = `${moviesURL}popular?api_key=${apiKey}&language=pt-BR`;
    getMovies(popularMoviesURL);
  }, []);

  return (
    <ContainerMoviesPage>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>Carregando...</p>
      )}
    </ContainerMoviesPage>
  );
};

export default MoviesPage;
