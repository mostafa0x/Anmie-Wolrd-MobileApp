export interface AppSliceType {
  topUpcomingAnime: AnmieType[];
  topOngoinggAnime: AnmieType[];
  isScrolling: boolean;
}

interface genresType {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnmieType {
  mal_id: number;
  url: string;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: [
    {
      type: string;
      title: string;
    },
    {
      type: string;
      title: string;
    },
    {
      type: string;
      title: string;
    },
    {
      type: string;
      title: string;
    }
  ];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: null | number;
  status: string;
  airing: boolean;
  aired: {
    from: string | null;
    to: null | string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: null | number;
        month: null | number;
        year: null | number;
      };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: null | number;
  scored_by: null | number;
  rank: null | number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: any;
    time: any;
    timezone: any;
    string: string;
  };
  genres: genresType[];
  explicit_genres: [];
}
