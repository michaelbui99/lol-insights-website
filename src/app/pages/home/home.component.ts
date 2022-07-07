import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Region } from 'src/app/model/region';
import { Summoner } from 'src/app/model/summoner';
import { SummonersService } from 'src/app/services/summoners.service';
import * as _ from 'lodash';
import {
  Subject,
  fromEvent,
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeagueService } from 'src/app/services/league.service';
import { LeagueEntry } from 'src/app/model/league-entry';
import { League } from 'src/app/model/league';
import { ProfileSuggestion } from 'src/app/model/profile-suggestion';
import { Router } from '@angular/router';
import { ProfileSuggestionClickEventData } from 'src/app/components/profile-suggestion/profile-suggestion-click-event-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('summonerSearch')
  searchRef: ElementRef;

  private _regionMappings: Map<string, Region>;
  profileLeagues: Map<string, League>;
  regions: string[] = [];
  selectedRegion: string = '';
  profileSuggestions: ProfileSuggestion[] = [];
  shouldDisplayHeader: boolean = false;
  searchQuery: string;

  constructor(
    private _summonersService: SummonersService,
    private _leagueService: LeagueService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {
    this._regionMappings = new Map();
  }

  ngOnInit(): void {
    Object.values(Region).forEach((value) => {
      this.regions.push(value.toString());
      this._regionMappings.set(value.toString(), value);
    });

    const lastSelectedRegion = localStorage.getItem('lastSelectedRegion');
    if (lastSelectedRegion) {
      this.selectedRegion = lastSelectedRegion;
    }
    console.log(this.regions);
  }

  ngAfterViewInit() {
    // Debounce to limit API calls on search input
    fromEvent(this.searchRef.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        tap(async (text) => {
          this.searchQuery = this.searchRef.nativeElement.value;
          if (this.searchQuery) {
            try {
              const summoners = await this._summonersService.getSummonersByName(
                this.searchQuery,
                this._regionMappings.get(this.selectedRegion)
              );
              sessionStorage.setItem('summoners', JSON.stringify(summoners));
              this.profileSuggestions = [];

              summoners.forEach(async (summoner) => {
                const league =
                  await this._leagueService.getLeagueBySummonerName(
                    summoner.name,
                    this._regionMappings.get(this.selectedRegion)
                  );

                this.profileSuggestions.push({
                  summoner: summoner,
                  league: league,
                });
              });
            } catch {
              this._snackBar.open(
                'Failed to retrieve summoner, try again later...'
              );
            }
          }
        })
      )
      .subscribe();
  }

  onRegionSelected(region: string) {
    localStorage.setItem('lastSelectedRegion', region);
  }

  async handleSearchInput(query: string) {
    if (!query) {
      this.shouldDisplayHeader = false;
      this.profileSuggestions = [];
      return;
    }

    this.shouldDisplayHeader = true;
  }

  handleOnProfileSuggestionClick(data: ProfileSuggestionClickEventData) {
    const { summonerName } = data;

    this._router.navigate(['summoner'], {
      queryParams: { summonerName: summonerName, region: this.selectedRegion },
    });
  }
}
