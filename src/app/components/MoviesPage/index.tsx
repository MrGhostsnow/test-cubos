"use client";
import SearchBar from "../SearchBar";
import MovieCard from "../MovieCard";
import { ContainerMoviesPage } from "./styles";
import { useState, useEffect } from "react";
import { IMovie } from "@/app/interfaces/MovieInterface";
import Link from "next/link";
import Pagination from "../Pagination";

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiKey = "b716e119325a7aeeeff2782636710df3";
  const moviesURL = "https://api.themoviedb.org/3/movie/";
  const maxPages = 4;

  const moviesPerPage = 5;

  const getMovies = async (moviesURL: string, page: number = 1) => {
    const response = await fetch(
      `${moviesURL}popular?api_key=${apiKey}&language=pt-BR&page=${page}`
    );
    const data = await response.json();
    setMovies(data.results);
    const totalMovies = data.total_results;
    const totalPageCount = Math.ceil(totalMovies / moviesPerPage);
    setTotalPages(Math.min(totalPageCount, maxPages));
  };

  useEffect(() => {
    getMovies(moviesURL);
  }, []);

  const handleSearch = (searchTerm: string) => {
    setSearchMovie(searchTerm);
  };

  useEffect(() => {
    if (searchMovie) {
      const searchMoviesURL = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=pt-BR&page=${currentPage}&api_key=${apiKey}`;
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
  }, [searchMovie, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    getMovies(moviesURL, pageNumber);
  };

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

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
      {totalPages > 0 && (
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
