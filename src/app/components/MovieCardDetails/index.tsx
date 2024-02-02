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

  console.log(movie);

  return (
    // <ContainerMovieCard>
    //   <ContainerInfos>
    //     <SectionInfos>
    //       <SectionTitle>
    //         <MovieTitle>{movie.title}</MovieTitle>
    //       </SectionTitle>
    //       <SectionTextMovie>
    //         <SectionDescription>
    //           <ContainerTitle>Sinopse</ContainerTitle>
    //           <MovieDescription>{movie.overview}</MovieDescription>
    //         </SectionDescription>
    //         <SectionMoreInfos>
    //           <TitleMoreInfos>Informações </TitleMoreInfos>
    //           <SectionMovieInfos>
    //             <SectionLabelInfo>
    //               <Label>Situação</Label>
    //               <MovieStatus>{translateStatus(movie.status)}</MovieStatus>
    //             </SectionLabelInfo>
    //             <SectionLabelInfo>
    //               <Label>Idioma</Label>
    //               <MovieLanguage>{movie.original_language}</MovieLanguage>
    //             </SectionLabelInfo>
    //             <SectionLabelInfo>
    //               <Label>Duração</Label>
    //               <MovieRuntime>
    //                 {formatMinutesToHours(movie.runtime)}
    //               </MovieRuntime>
    //             </SectionLabelInfo>
    //             <SectionLabelInfo>
    //               <Label>Orcamento</Label>
    //               <MovieBudget>
    //                 {movie.budget.toLocaleString("en-US", {
    //                   style: "currency",
    //                   currency: "USD",
    //                 })}
    //               </MovieBudget>
    //             </SectionLabelInfo>
    //             <SectionLabelInfo>
    //               <Label>Lucro</Label>
    //               <MovieRevenue>
    //                 {movie.revenue.toLocaleString("en-US", {
    //                   style: "currency",
    //                   currency: "USD",
    //                 })}
    //               </MovieRevenue>
    //             </SectionLabelInfo>
    //           </SectionMovieInfos>
    //         </SectionMoreInfos>
    //         <SectionGenre>
    //           <MovieGenre>
    //             {movie.genres && movie.genres.length > 0
    //               ? movie.genres.map((genre, index) => (
    //                   <Genre key={index}>{genre.name}</Genre>
    //                 ))
    //               : "Desconhecido"}
    //           </MovieGenre>
    //         </SectionGenre>
    //       </SectionTextMovie>
    //       <SectionMovieAverage>
    //         <MovieAverage>
    //           {transformForPercent(movie.vote_average)}
    //         </MovieAverage>
    //       </SectionMovieAverage>
    //     </SectionInfos>
    //     <SectionPosterAndDate>
    //       <MovieYear>{formatDate(movie.release_date)}</MovieYear>
    //       <MoviePoster
    //         src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
    //         alt={movie.title}
    //       />
    //     </SectionPosterAndDate>
    //   </ContainerInfos>
    //   {movieVideos ? (
    //     <VideoPlayer videoKey={movieVideos} />
    //   ) : (
    //     <p>Vídeo não disponível.</p>
    //   )}
    // </ContainerMovieCard>
    <ContainerMovieCard>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.title}
      />
      <ContainerInfos>
        <SectionTitles>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOriginalTitle>
            <p>Titulo original:</p>
            {movie.original_title}
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
            <PopularityTitle>Popularity</PopularityTitle>
            <Popularity>{movie.popularity}</Popularity>
          </MoviePopularity>
          <MovieVotes>
            <VotesTitle>Votes</VotesTitle>
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
              <LaunchTitle>Lançamento</LaunchTitle>
              <Launch>{formatDate(movie.release_date)}</Launch>
            </SectionLaunch>
            <SectionRuntime>
              <RuntimeTitle>Duração</RuntimeTitle>
              <Runtime>{formatMinutesToHours(movie.runtime)}</Runtime>
            </SectionRuntime>
            <SectionStatus>
              <StatusTitle>Status</StatusTitle>
              <Status>{movie.status}</Status>
            </SectionStatus>
            <SectionOriginalLanguage>
              <OriginalLanguageTitle>IDIOMA</OriginalLanguageTitle>
              <OriginalLanguage>{movie.original_language}</OriginalLanguage>
            </SectionOriginalLanguage>
          </SectionMovieInfos>
          <SectionMoney>
            <SectionBudget>
              <BudgetTitle>Orcamento</BudgetTitle>
              <Budget>
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Budget>
            </SectionBudget>
            <SectionRevenue>
              <RevenueTitle>Receita</RevenueTitle>
              <Revenue>
                {movie.revenue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Revenue>
            </SectionRevenue>
            <SectionProfit>
              <ProfitTitle>Lucro</ProfitTitle>
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
    </ContainerMovieCard>
  );
}
