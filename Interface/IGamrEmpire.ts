export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export interface IGenre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  description: string;
  games: IGame[];
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGameQuery {
  genre:IGenre | null;
  platform: IPlatform | null;
  sortOrder: string;
  search:string;
}

export interface IFetchResponse<T> {
  count: number;
  results: T[];
}