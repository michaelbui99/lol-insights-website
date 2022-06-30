import { Injectable } from '@angular/core';
import { BASE_URL } from '../config/config';
import { Regions } from '../model/regions';
import { Summoner } from '../model/summoner';

@Injectable({
  providedIn: 'root',
})
export class SummonersService {
  constructor() {}

  async getSummonerByName(
    summonerName: string,
    region?: Regions
  ): Promise<Summoner> {
    let chosenRegion = Regions.EUW1;

    if (region) {
      chosenRegion = region;
    }

    const res = await fetch(
      `${BASE_URL}/summoner/${chosenRegion.toLowerCase()}/${summonerName}`
    );

    const summoner = await res.json();

    return summoner;
  }

  async getSummonersByName(summonerName: string, region?: Regions) {
    let chosenRegion = Regions.EUW1;

    if (region) {
      chosenRegion = region;
    }

    const res = await fetch(
      `${BASE_URL}/summoners/${chosenRegion.toLowerCase()}/${summonerName}`
    );

    const summoners = await res.json();
    console.log(summoners);
    return summoners;
  }
}
