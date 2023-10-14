"use client";
import SearchBar from "../SearchBar";
import MovieCard from "../MovieCard";
import { ContainerMoviesPage } from "./styles";

import { useState, useEffect } from "react";
import Link from "next/link";

interface IMovie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  genre_ids: number[];
}

// Importações e definições de tipos

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const apiKey = "b716e119325a7aeeeff2782636710df3";
  const moviesURL = "https://api.themoviedb.org/3/movie/";
  const searchMovieURL = "https://api.themoviedb.org/3/search/movie/";

  const getMovies = async (moviesURL: string) => {
    const response = await fetch(moviesURL);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const popularMoviesURL = `${moviesURL}popular?api_key=${apiKey}&language=pt-BR`;
    getMovies(popularMoviesURL);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchMovie(searchTerm);
  };

  useEffect(() => {
    if (searchMovie) {
      const searchMoviesURL = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=pt-BR&page=1&api_key=${apiKey}`;
      fetch(searchMoviesURL)
        .then((response) => response.json())
        .then((data) => {
          // Converta a pesquisa e os títulos para letras minúsculas
          const lowercaseSearch = searchMovie.toLowerCase();
          const filteredResults = data.results.filter((movie: any) =>
            movie.title.toLowerCase().includes(lowercaseSearch)
          );
          setSearchResult(filteredResults);
        })
        .catch((err) => console.error(err));
    } else {
      setSearchResult([]);
    }
  }, [searchMovie]);

  return (
    <ContainerMoviesPage>
      <SearchBar onSearch={handleSearch} />
      {searchMovie ? (
        searchResult.length > 0 ? (
          searchResult.map((movie) => (
            <Link
              key={movie.id}
              href={{
                pathname: `/movie-details/${movie.title}`,
                query: { title: movie.title },
              }}
            >
              <MovieCard movie={movie} />
            </Link>
          ))
        ) : (
          <p>Nenhum resultado encontrado</p>
        )
      ) : movies.length > 0 ? (
        movies.map((movie) => (
          <Link
            key={movie.id}
            href={{
              pathname: `/movie-details/${movie.title}`,
              query: { title: movie.title },
            }}
          >
            <MovieCard movie={movie} />
          </Link>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </ContainerMoviesPage>
  );
};

export default MoviesPage;
