"use client";
import { useEffect, useState } from "react";
import { transformForPercent } from "@/app/utils/transformForPercent";
import { formatDate } from "@/app/utils/formatDate";
import { formatMinutesToHours } from "@/app/utils/formatMinutesToHours";
import { translateStatus } from "@/app/utils/translateStatus";
import { IMovie } from "@/app/interfaces/MovieInterface";
import VideoPlayer from "@/app/components/VideoPlayer";
import {
  ContainerMovieCard,
  ContainerInfos,
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
  SectionPosterAndDate,
} from "./styles";

export default function MovieCardDetails({ movie }: { movie: IMovie }) {
  const [moviesGenre, setMoviesGenre] = useState<any[]>([]);
  const [movieVideos, setMovieVideos] = useState<any[]>([]);
  const apiKey = "b716e119325a7aeeeff2782636710df3";

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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieVideos(data.results[0]);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ContainerMovieCard>
      <ContainerInfos>
        <SectionInfos>
          <SectionTitle>
            <MovieTitle>{movie.title}</MovieTitle>
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
                      <Genre key={index}>{genre.name}</Genre>
                    ))
                  : "Desconhecido"}
              </MovieGenre>
            </SectionGenre>
          </SectionTextMovie>
          <SectionMovieAverage>
            <MovieAverage>
              {transformForPercent(movie.vote_average)}
            </MovieAverage>
          </SectionMovieAverage>
        </SectionInfos>
        <SectionPosterAndDate>
          <MovieYear>{formatDate(movie.release_date)}</MovieYear>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
          />
        </SectionPosterAndDate>
      </ContainerInfos>
      {movieVideos ? (
        <VideoPlayer videoKey={movieVideos} />
      ) : (
        <p>Vídeo não disponível.</p>
      )}
    </ContainerMovieCard>
  );
}
