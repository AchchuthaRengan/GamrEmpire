export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Object }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}
