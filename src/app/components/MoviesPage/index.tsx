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
  const moviesPerPage = 20;
  const [loading, setLoading] = useState(false);

  const fetchMoviesByPage = async (page: number) => {
    try {
      setLoading(true);

      let url = `${moviesURL}popular?api_key=${apiKey}&language=pt-BR&page=${page}`;

      if (searchMovie) {
        url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=pt-BR&page=${page}&api_key=${apiKey}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (searchMovie) {
        setSearchResult(data.results);
        setTotalPages(data.total_pages);
      } else {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoviesByPage(currentPage);
  }, [currentPage, searchMovie]);

  const handleSearch = (searchTerm: string) => {
    setSearchMovie(searchTerm);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ContainerMoviesPage>
      <SearchBar onSearch={handleSearch} />
      <SectionMovies>
        {(searchMovie ? searchResult : movies)?.map((movie: IMovie) => (
          <Link
            style={{ textDecoration: "none", width: "220px" }}
            key={movie.id}
            href={{
              pathname: `/movie-details/${movie.id}`,
              query: { id: movie.id },
            }}
          >
            <MovieCard hasPoster movie={movie} />
          </Link>
        ))}
        {!loading &&
          (searchMovie ? searchResult?.length === 0 : movies?.length === 0) && (
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Nenhum resultado encontrado
            </p>
          )}
      </SectionMovies>
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
