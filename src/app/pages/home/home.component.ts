import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Regions } from 'src/app/model/regions';
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
  regionMappings: Map<string, Regions> = new Map();
  searchQuery: string;

  constructor(private _summonersService: SummonersService) {}

  ngOnInit(): void {
    Object.values(Regions).forEach((value) => {
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
          this.profileSuggestions =
            await this._summonersService.getSummonersByName(
              this.searchQuery,
              this.regionMappings.get(this.selectedRegion)
            );
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
