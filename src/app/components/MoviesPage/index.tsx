"use client";
import React, { useEffect, useState } from "react";
import { ContainerMoviesPage, SectionMovies } from "./styles";
import { IMovie } from "@/app/interfaces/MovieInterface";
import Link from "next/link";
import SearchBar from "../SearchBar";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";
import { useMovies } from "@/app/services/moviesContext";

const MoviesPage: React.FC = () => {
  const {
    movies,
    setMovies,
    searchMovie,
    setSearchMovie,
    searchResult,
    setSearchResult,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  } = useMovies();

  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;
  const moviesURL = "https://api.themoviedb.org/3/movie/";
  const maxPages = 4;
  const moviesPerPage = 10;

  const [cachedPages, setCachedPages] = useState<{ [key: number]: IMovie[] }>(
    {}
  );

  const getMovies = async (moviesURL: string, page: number = 1) => {
    if (cachedPages[page]) {
      setMovies(cachedPages[page]);
      return;
    }

    const response = await fetch(
      `${moviesURL}popular?api_key=${apiKey}&language=pt-BR&page=${page}`
    );
    const data = await response.json();

    setCachedPages((prevCache) => ({ ...prevCache, [page]: data.results }));

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
      <SectionMovies>
        {searchMovie ? (
          searchResult.length > 0 ? (
            searchResult.slice(startIndex, endIndex).map((movie) => (
              <Link
                style={{ display: "flex", justifyContent: "center" }}
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
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#1f75cb",
                fontWeight: "bold",
              }}
            >
              Nenhum resultado encontrado
            </p>
          )
        ) : movies && movies.length > 0 ? (
          movies.slice(startIndex, endIndex).map((movie) => (
            <Link
              style={{ display: "flex", justifyContent: "center" }}
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
      </SectionMovies>
      {totalPages > 1 && (!searchMovie || searchResult.length > 0) && (
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
