import { Injectable } from '@angular/core';
import { BASE_URL } from '../config/config';
import { Region } from '../model/region';
import { Summoner } from '../model/summoner';

@Injectable({
  providedIn: 'root',
})
export class SummonersService {
  constructor() {}

  async getSummonerByName(
    summonerName: string,
    region?: Region
  ): Promise<Summoner> {
    let chosenRegion = Region.EUW1;

    if (region) {
      chosenRegion = region;
    }

    const res = await fetch(
      `${BASE_URL}/summoner/${chosenRegion.toLowerCase()}/${summonerName}`
    );

    const summoner = await res.json();

    return summoner;
  }

  async getSummonersByName(summonerName: string, region?: Region) {
    let chosenRegion = Region.EUW1;

    if (region) {
      chosenRegion = region;
    }

    const res = await fetch(
      `${BASE_URL}/summoners/${chosenRegion.toLowerCase()}/${summonerName}`
    );

    const summoners: Summoner[] = await res.json();

    // Removing invalid
    summoners.forEach((summoner, idx) => {
      if (!summoner.accountId) {
        summoners.splice(idx, 1);
      }
    });

    console.log(summoners);
    return summoners;
  }
}
