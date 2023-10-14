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
  ContainerTitle,
  SectionMoreInfos,
  TitleMoreInfos,
  MovieStatus,
  MovieRuntime,
  MovieBudget,
  MovieRevenue,
  MovieLanguage,
  SectionMovieInfos,
  SectionLabelInfo,
  Label,
} from "./styles";

interface IGenre {
  name: string;
}

interface IMovie {
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  budget: number;
  original_language: string;
  revenue: number;
  runtime: number;
  status: string;
  genres: IGenre[];
}

export default function MovieCardDetails({ movie }: { movie: IMovie }) {
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

  function formatMinutesToHours(minutes: number) {
    if (typeof minutes !== "number") {
      return "Valor inválido";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}h${remainingMinutes}min`;
  }

  function translateStatus(status: string) {
    switch (status.toLowerCase()) {
      case "released":
        return "Lançado";
      case "upcoming":
        return "Próximo";
      default:
        return "Desconhecido";
    }
  }

  return (
    <ContainerMovieCard>
      <SectionInfos>
        <SectionTitle>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieYear>{formatDate(movie.release_date)}</MovieYear>
        </SectionTitle>
        <SectionTextMovie>
          <SectionDescription>
            <ContainerTitle>Sinopse</ContainerTitle>
            <MovieDescription>{movie.overview}</MovieDescription>
          </SectionDescription>
          <SectionMoreInfos>
            <TitleMoreInfos>Informações </TitleMoreInfos>
            <SectionMovieInfos>
              <SectionLabelInfo>
                <Label>Situação</Label>
                <MovieStatus>{translateStatus(movie.status)}</MovieStatus>
              </SectionLabelInfo>
              <SectionLabelInfo>
                <Label>Idioma</Label>
                <MovieLanguage>{movie.original_language}</MovieLanguage>
              </SectionLabelInfo>
              <SectionLabelInfo>
                <Label>Duração</Label>
                <MovieRuntime>
                  {formatMinutesToHours(movie.runtime)}
                </MovieRuntime>
              </SectionLabelInfo>
              <SectionLabelInfo>
                <Label>Orcamento</Label>
                <MovieBudget>
                  {movie.budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </MovieBudget>
              </SectionLabelInfo>
              <SectionLabelInfo>
                <Label>Lucro</Label>
                <MovieRevenue>
                  {movie.revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </MovieRevenue>
              </SectionLabelInfo>
            </SectionMovieInfos>
          </SectionMoreInfos>
          <SectionGenre>
            <MovieGenre>
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre, index) => (
                    <Genre>{genre.name}</Genre>
                  ))
                : "Desconhecido"}
            </MovieGenre>
            {/* <MovieGenre>
              {movie.genre_ids && movie.genre_ids.length > 0
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
            </MovieGenre> */}
          </SectionGenre>
        </SectionTextMovie>
        <SectionMovieAverage>
          <MovieAverage>{transformForPercent(movie.vote_average)}</MovieAverage>
        </SectionMovieAverage>
      </SectionInfos>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
    </ContainerMovieCard>
  );
}
