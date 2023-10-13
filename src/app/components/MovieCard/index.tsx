import {
  ContainerMovieCard,
  MoviePoster,
  SectionInfos,
  MovieTitle,
  MovieYear,
  MovieDescription,
  MovieGenre,
} from "./styles";

interface IMovie {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  genres: [
    {
      name: string;
    }
  ];
}

export default function MovieCard({ movie }: { movie: IMovie }) {
  {
    return (
      <ContainerMovieCard>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
        <SectionInfos>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieYear>{movie.release_date}</MovieYear>
          <MovieDescription>{movie.overview}</MovieDescription>
          {/* <MovieGenre>{movie.genres.name}</MovieGenre> */}
        </SectionInfos>
      </ContainerMovieCard>
    );
  }
}
