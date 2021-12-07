export interface IPokemon {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
    image: string;
  }[];
}
