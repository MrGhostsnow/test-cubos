"use client";
import { useEffect, useState } from "react";
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
  SectionGenre,
  MovieGenre,
  Genre,
} from "./styles";

export default function MovieCard({ movie }: { movie: IMovie }) {
  const [moviesGenre, setMoviesGenre] = useState<any[]>([]);

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
      "https://api.themoviedb.org/3/genre/movie/list?api_key=b716e119325a7aeeeff2782636710df3&language=pt-BR",
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
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <SectionInfos>
        <SectionMovieAverage>
          <MovieAverage>{transformForPercent(movie.vote_average)}</MovieAverage>
        </SectionMovieAverage>
        <SectionTitle>
          <MovieTitle>{limitDescription(movie.title, 30)}</MovieTitle>
        </SectionTitle>
        <MovieYear>{formatDate(movie.release_date)}</MovieYear>
        <SectionTextMovie>
          <SectionDescription>
            <MovieDescription>
              {limitDescription(movie.overview, 250)}
            </MovieDescription>
          </SectionDescription>
          <SectionGenre>
            <MovieGenre>
              {moviesGenre && moviesGenre.length > 0
                ? movie.genre_ids.map((genreId, index) => {
                    const genre = moviesGenre.find(
                      (item) => item.id === genreId
                    );
                    const genreName = genre ? genre.name : "Desconhecido";

                    return (
                      <Genre key={index} className="genre">
                        {genreName}
                      </Genre>
                    );
                  })
                : "Carregando..."}
            </MovieGenre>
          </SectionGenre>
        </SectionTextMovie>
      </SectionInfos>
    </ContainerMovieCard>
  );
}
