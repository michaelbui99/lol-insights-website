import { LeagueEntry } from './league-entry';
import { LeagueTier } from './league-tier';
import { Region } from './region';

export interface League {
  data: LeagueEntry[];
  name: string;
  id: string;
  platform: Region;
  queue: string;
  tier: LeagueTier;
}
