export interface CharacterI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: LocationI;
  image: string;
  episode: EpisodeI[];
  url: string;
  created: string;
}

export interface EpisodeI {
  episodes: string[];
}

export interface LocationI {
  name: string;
  url: string;
}
