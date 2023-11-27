import { IGenre } from "./GenreInterface";

export interface IMovie {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    poster_path: string;
    genre_ids?: number[];
    budget: number;
    original_language: string;
    revenue: number;
    runtime: number;
    status: string;
    genres: IGenre[];
  }

