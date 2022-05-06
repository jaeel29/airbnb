export interface QueryProps<T> {
  [key: string]: T | T[] | undefined;
}

export interface SearchResults {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export type SelectedLocationType = SearchResults | '';
