import { Injectable } from '@angular/core';
import { LeagueEntry } from '../model/league-entry';
import { Region } from '../model/region';
import { BASE_URL } from '../config/config';
import { League } from '../model/league';
import { QueueType } from '../model/queue-type';

@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  constructor() {}

  async getLeagueBySummonerName(
    summonerName: string,
    region: Region,
    queueType: QueueType
  ): Promise<League> {
    const url = `${BASE_URL}/summoners/${region}/${summonerName}/league/${queueType}`;
    const res = await fetch(url);
    const league = await res.json();
    return league;
  }
}
