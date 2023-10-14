"use client";
import React, { useEffect, useState } from "react";
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

interface IMovie {
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  genre_ids: number[];
}

export default function MovieCard({ movie }: { movie: IMovie }) {
  const [moviesGenre, setMoviesGenre] = useState<any[]>([]); // Inicialize como uma matriz vazia

  function findGenreNameById(genreIds: number[], genresList: any[]): string {
    const genreNames = genreIds.map((id) => {
      const genre = genresList.find((genre) => genre.id === id);
      return genre ? genre.name : "Desconhecido";
    });
    return genreNames.join(", ");
  }

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

  function transformForPercent(value: number) {
    if (typeof value !== "number") {
      throw new Error("O argumento deve ser um número.");
    }
    const percent = (value * 10).toFixed(0);
    return `${percent}%`;
  }

  function formatDate(data: any) {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, "0");
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  // ...

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
          <MovieTitle>{movie.title}</MovieTitle>
        </SectionTitle>
        <MovieYear>{formatDate(movie.release_date)}</MovieYear>
        <SectionTextMovie>
          <SectionDescription>
            <MovieDescription>{movie.overview}</MovieDescription>
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
