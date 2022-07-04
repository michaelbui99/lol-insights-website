import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Summoner } from 'src/app/model/summoner';
import { DDRAGON_IMG_PROFILE_ICON_URL } from 'src/app/config/config';
import { LeagueEntry } from 'src/app/model/league-entry';
import { LeagueDivison } from 'src/app/model/league-divison';
import { LeagueTier } from 'src/app/model/league-tier';
import { League } from 'src/app/model/league';
@Component({
  selector: 'app-profile-suggestion',
  templateUrl: './profile-suggestion.component.html',
  styleUrls: ['./profile-suggestion.component.scss'],
})
export class ProfileSuggestionComponent implements OnInit {
  @Input()
  summoner: Summoner;
  @Input()
  league: League;

  leagueEntryForSummoner: LeagueEntry;
  profileIconUrl: string;
  tierToDisplay: LeagueTier;
  divisonToDisplay: LeagueDivison;
  lpToDisplay: number;

  constructor() {}

  ngOnInit(): void {
    this.profileIconUrl = `${DDRAGON_IMG_PROFILE_ICON_URL}/${this.summoner.profileIconId.toString()}.png`;
    console.log(this.league);
    this.league.data.forEach((entry) => {
      if (entry.summonerId === this.summoner.id) {
        this.leagueEntryForSummoner = entry;
        this.tierToDisplay = this.leagueEntryForSummoner.tier;
        this.divisonToDisplay = this.leagueEntryForSummoner.division;
        this.lpToDisplay = this.leagueEntryForSummoner.leaguePoints;
      }
    });
  }
}
