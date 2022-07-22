export type LinkButtonProps = {
  isEpisode?: boolean;
};

export type IconButtonProps = {
  isFavorite: boolean;
};

export type BarProps = {
  isHeader?: boolean;
};

export type Episode = {
  air_date?: string;
  episode?: string;
  id?: string;
  isHeader?: boolean;
  name: string;
};
