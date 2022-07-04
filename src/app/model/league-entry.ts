import { LeagueDivison } from './league-divison';
import { LeagueTier } from './league-tier';
import { Region } from './region';

export interface LeagueEntry {
  division: LeagueDivison;
  summonerName: string;
  platform: Region;
  summonerId: string;
  queue: string;
  tier: LeagueTier;
  leagueId: string;
  onHotStreak: boolean;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  promos: any; //TODO: Do some profiling and find out what this indicates
  wins: number;
  losses: number;
  leaguePoints: number;
}
