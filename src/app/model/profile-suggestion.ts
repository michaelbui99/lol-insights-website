import { League } from './league';
import { Summoner } from './summoner';

export interface ProfileSuggestion {
  summoner: Summoner;
  league: League;
}
