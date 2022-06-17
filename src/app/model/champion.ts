export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  image: ChampionImage;
}

interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
}
