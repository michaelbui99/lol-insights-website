import { Component, OnInit, ViewChild } from '@angular/core';
import { Regions } from 'src/app/model/regions';
import { Summoner } from 'src/app/model/summoner';
import { SummonersService } from 'src/app/services/summoners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regions: string[] = [];
  selectedRegion: string = '';
  profileSuggestions: Summoner[] = [];
  shouldDisplayHeader: boolean = false;
  regionMappings: Map<string, Regions> = new Map();

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

  onRegionSelected(region: string) {
    localStorage.setItem('lastSelectedRegion', region);
  }

  async handleSearchInput(query: string) {
    if (!query) {
      this.shouldDisplayHeader = false;
      return;
    }

    this.shouldDisplayHeader = true;

    // TODO: Use debounce to limit amount of API calls on search
    const summoners = await this._summonersService.getSummonersByName(
      query,
      this.regionMappings.get(this.selectedRegion)
    );

    this.profileSuggestions = summoners;
  }
}
