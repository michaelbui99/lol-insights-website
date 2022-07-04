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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('summonerSearch')
  searchRef: ElementRef;

  regions: string[] = [];
  selectedRegion: string = '';
  profileSuggestions: Summoner[] = [];
  shouldDisplayHeader: boolean = false;
  regionMappings: Map<string, Region> = new Map();
  searchQuery: string;

  constructor(
    private _summonersService: SummonersService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    Object.values(Region).forEach((value) => {
      this.regions.push(value.toString());
      this.regionMappings.set(value.toString(), value);
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
          try {
            this.profileSuggestions =
              await this._summonersService.getSummonersByName(
                this.searchQuery,
                this.regionMappings.get(this.selectedRegion)
              );
          } catch {
            this._snackBar.open(
              'Failed to retrieve summoner, try again later...'
            );
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
}
