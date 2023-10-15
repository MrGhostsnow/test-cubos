"use client";
import SearchBar from "../SearchBar";
import MovieCard from "../MovieCard";
import { ContainerMoviesPage } from "./styles";

import { useState, useEffect } from "react";
import Link from "next/link";
import Pagination from "../Pagination";

interface IMovie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  genre_ids: number[];
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = "b716e119325a7aeeeff2782636710df3";
  const moviesURL = "https://api.themoviedb.org/3/movie/";
  const searchMovieURL = "https://api.themoviedb.org/3/search/movie/";
  const maxPages = 3;

  const moviesPerPage = 10;

  const getMovies = async (moviesURL: string, page: number = 1) => {
    const response = await fetch(
      `${moviesURL}popular?api_key=${apiKey}&language=pt-BR&page=${page}`
    );
    const data = await response.json();
    setMovies(data.results);
    const totalMovies = data.total_results;
    const totalPageCount = Math.ceil(totalMovies / moviesPerPage);
    setTotalPages(Math.min(totalPageCount, maxPages)); // Limitar o total de páginas
  };

  useEffect(() => {
    getMovies(moviesURL);
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
          const lowercaseSearch = searchMovie.toLowerCase();
          const filteredResults = data.results.filter((movie: IMovie) =>
            movie.title.toLowerCase().includes(lowercaseSearch)
          );
          setSearchResult(filteredResults);
          setTotalPages(1);
        })
        .catch((err) => console.error(err));
    } else {
      setSearchResult([]);
      getMovies(moviesURL);
    }
  }, [searchMovie]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    getMovies(moviesURL, pageNumber);
  };

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  console.log(searchResult);

  return (
    <ContainerMoviesPage>
      <SearchBar onSearch={handleSearch} />
      {searchMovie ? (
        searchResult.length > 0 ? (
          searchResult.slice(startIndex, endIndex).map((movie) => (
            <Link
              key={movie.id}
              href={{
                pathname: `/movie-details/${movie.id}`,
                query: { id: movie.id },
              }}
            >
              <MovieCard movie={movie} />
            </Link>
          ))
        ) : (
          <p>Nenhum resultado encontrado</p>
        )
      ) : movies.length > 0 ? (
        movies.slice(startIndex, endIndex).map((movie) => (
          <Link
            key={movie.id}
            href={{
              pathname: `/movie-details/${movie.id}`,
              query: { id: movie.id },
            }}
          >
            <MovieCard movie={movie} />
          </Link>
        ))
      ) : (
        <p>Carregando...</p>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </ContainerMoviesPage>
  );
};

export default MoviesPage;
