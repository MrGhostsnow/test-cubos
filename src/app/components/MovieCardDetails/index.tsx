"use client";
import React, { useEffect, useState } from "react";
import { transformForPercent } from "@/app/utils/transformForPercent";
import { formatDate } from "@/app/utils/formatDate";
import { formatMinutesToHours } from "@/app/utils/formatMinutesToHours";
import { translateStatus } from "@/app/utils/translateStatus";
import { IMovie } from "@/app/interfaces/MovieInterface";
import VideoPlayer from "@/app/components/VideoPlayer";
import {
  ContainerMovieCard,
  ContainerCardInfos,
  MoviePoster,
  ContainerInfos,
  SectionTitles,
  MovieTitle,
  MovieOriginalTitle,
  MovieCatchFrase,
  SectionDescription,
  ContainerTitle,
  MovieDescription,
  SectionGenre,
  MovieGenre,
  Genre,
  ContainerMoreInfos,
  SectionVotes,
  MoviePopularity,
  PopularityTitle,
  Popularity,
  MovieVotes,
  VotesTitle,
  Votes,
  MovieAverage,
  SectionGeneralInfos,
  SectionLaunch,
  LaunchTitle,
  Launch,
  SectionRuntime,
  RuntimeTitle,
  Runtime,
  SectionStatus,
  StatusTitle,
  Status,
  SectionOriginalLanguage,
  OriginalLanguageTitle,
  OriginalLanguage,
  SectionMoney,
  SectionBudget,
  BudgetTitle,
  Budget,
  SectionRevenue,
  RevenueTitle,
  Revenue,
  SectionProfit,
  ProfitTitle,
  Profit,
  Genres,
  SectionMovieAverage,
  SectionMovieInfos,
} from "./styles";

export default function MovieCardDetails({ movie }: { movie: IMovie }) {
  const [moviesGenre, setMoviesGenre] = useState<any[]>([]);
  const [movieVideos, setMovieVideos] = useState<any[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=pt-BR&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (movie) {
          setMovieVideos(data.results[0].key);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (movie.backdrop_path) {
      setBackgroundImage(
        `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      );
    }
  }, [movie.backdrop_path]);

  return (
    <ContainerMovieCard style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ContainerCardInfos>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
        />
        <ContainerInfos>
          <SectionTitles>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieOriginalTitle>
              <p>Titulo original: {movie.original_title}</p>
            </MovieOriginalTitle>
            <MovieCatchFrase>{movie.tagline}</MovieCatchFrase>
          </SectionTitles>
          <SectionDescription>
            <ContainerTitle>Sinopse</ContainerTitle>
            <MovieDescription>{movie.overview}</MovieDescription>
          </SectionDescription>
          <SectionGenre>
            <ContainerTitle>GENERO</ContainerTitle>
            <Genres>
              {movie.genres && movie.genres.length > 0
                ? movie.genres.map((genre, index) => (
                    <MovieGenre>
                      <Genre key={index}>{genre.name}</Genre>
                    </MovieGenre>
                  ))
                : "Desconhecido"}
            </Genres>
          </SectionGenre>{" "}
        </ContainerInfos>
        <ContainerMoreInfos>
          <SectionVotes>
            <MoviePopularity>
              <PopularityTitle>POPULARIDADE</PopularityTitle>
              <Popularity>{movie.popularity}</Popularity>
            </MoviePopularity>
            <MovieVotes>
              <VotesTitle>VOTOS</VotesTitle>
              <Votes>{movie.vote_count}</Votes>
            </MovieVotes>
            <SectionMovieAverage>
              <MovieAverage>
                {transformForPercent(movie.vote_average)}
                <span style={{ color: "#fff" }}>%</span>
              </MovieAverage>
            </SectionMovieAverage>
          </SectionVotes>
          <SectionGeneralInfos>
            <SectionMovieInfos>
              <SectionLaunch>
                <LaunchTitle>LANÇAMENTO</LaunchTitle>
                <Launch>{formatDate(movie.release_date)}</Launch>
              </SectionLaunch>
              <SectionRuntime>
                <RuntimeTitle>DURAÇÃO</RuntimeTitle>
                <Runtime>{formatMinutesToHours(movie.runtime)}</Runtime>
              </SectionRuntime>
              <SectionStatus>
                <StatusTitle>STATUS</StatusTitle>
                <Status>{movie.status}</Status>
              </SectionStatus>
              <SectionOriginalLanguage>
                <OriginalLanguageTitle>IDIOMA</OriginalLanguageTitle>
                <OriginalLanguage>{movie.original_language}</OriginalLanguage>
              </SectionOriginalLanguage>
            </SectionMovieInfos>
            <SectionMoney>
              <SectionBudget>
                <BudgetTitle>ORÇAMENTO</BudgetTitle>
                <Budget>
                  {movie.budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Budget>
              </SectionBudget>
              <SectionRevenue>
                <RevenueTitle>RECEITA</RevenueTitle>
                <Revenue>
                  {movie.revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Revenue>
              </SectionRevenue>
              <SectionProfit>
                <ProfitTitle>LUCRO</ProfitTitle>
                <Profit>
                  {(movie.revenue - movie.budget).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Profit>
              </SectionProfit>
            </SectionMoney>
          </SectionGeneralInfos>
        </ContainerMoreInfos>
        {movieVideos ? (
          <>
            <p
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "29.26px",
              }}
            >
              TRAILER
            </p>
            <VideoPlayer videoKey={movieVideos} />
          </>
        ) : (
          <p>Vídeo não disponível.</p>
        )}
      </ContainerCardInfos>
    </ContainerMovieCard>
  );
}
