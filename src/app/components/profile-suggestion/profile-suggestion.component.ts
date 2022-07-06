import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Summoner } from 'src/app/model/summoner';
import { DDRAGON_IMG_PROFILE_ICON_URL } from 'src/app/config/config';
import { LeagueEntry } from 'src/app/model/league-entry';
import { LeagueDivison } from 'src/app/model/league-divison';
import { LeagueTier } from 'src/app/model/league-tier';
import { League } from 'src/app/model/league';
import { Router } from '@angular/router';
import { ProfileSuggestionClickEventData } from './profile-suggestion-click-event-data';
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
  @Output()
  onClick: EventEmitter<ProfileSuggestionClickEventData> = new EventEmitter();

  leagueEntryForSummoner: LeagueEntry;
  profileIconUrl: string;
  tierToDisplay: LeagueTier;
  divisonToDisplay: LeagueDivison;
  lpToDisplay: number;

  constructor(private _router: Router) {}

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

  handleOnClick() {
    this.onClick.emit({ summonerName: this.summoner.name });
  }
}
