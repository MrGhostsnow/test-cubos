"use client";
import React, { useEffect, useState } from "react";
import { transformForPercent } from "@/app/utils/transformForPercent";
import { formatDate } from "@/app/utils/formatDate";
import { limitDescription } from "@/app/utils/limitDescription";
import { IMovie } from "@/app/interfaces/MovieInterface";
import {
  ContainerMovieCard,
  MoviePoster,
  SectionInfos,
  MovieAverage,
  SectionMovieAverage,
  SectionTitle,
  MovieTitle,
  MovieYear,
  SectionTextMovie,
  SectionDescription,
  MovieDescription,
  MovieGenre,
  Genre,
  MovieGenreContainer,
} from "./styles";
import Circle from "../ProgressBar";

interface MovieCardProps {
  movie: IMovie;
  hasPoster: boolean; // Adicione a propriedade hasPoster ao tipo das props
}
export default function MovieCard({ movie, hasPoster }: MovieCardProps) {
  const [moviesGenre, setMoviesGenre] = useState<any[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzE2ZTExOTMyNWE3YWVlZWZmMjc4MjYzNjcxMGRmMyIsInN1YiI6IjY0YmFjY2M3YjMzMTZiMDBjNWJiYjE0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rQPpuDIgaUs3RbTlLZID77i2CQmsnFvWUvjlAs1akMM",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMoviesGenre(response.genres);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ContainerMovieCard>
      {movie.poster_path ? (
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div>No poster available</div>
      )}
      <SectionInfos hasPoster={movie.poster_path !== null}>
        <SectionMovieAverage>
          <MovieAverage>
            {transformForPercent(movie.vote_average)}
            <span style={{ color: "#fff" }}>%</span>
          </MovieAverage>
        </SectionMovieAverage>
        <MovieTitle>{limitDescription(movie.title, 30)}</MovieTitle>
        <MovieGenreContainer>
          <MovieGenre>
            {moviesGenre && movie.genre_ids && moviesGenre.length > 0
              ? movie.genre_ids.slice(0, 2).map((genreId, index) => {
                  const genre = moviesGenre.find((item) => item.id === genreId);
                  const genreName = genre ? genre.name : "Desconhecido";

                  return (
                    <Genre key={index} className="genre">
                      {genreName}
                    </Genre>
                  );
                })
              : "Carregando..."}
          </MovieGenre>
        </MovieGenreContainer>
      </SectionInfos>
    </ContainerMovieCard>
  );
}
