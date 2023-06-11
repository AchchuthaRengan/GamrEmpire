export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Object }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export interface Genre{
  id: number;
  name: string;
  slug: string;
  image_background: string;
  description: string;
  games: Game[];
}
