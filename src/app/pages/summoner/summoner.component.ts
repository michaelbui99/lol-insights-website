import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RegionMappings } from 'src/app/model/region-mappings';
import { Summoner } from 'src/app/model/summoner';
import { SummonersService } from 'src/app/services/summoners.service';
import { SummonerTabOption } from './summoner-tab-option';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss'],
})
export class SummonerComponent implements AfterViewInit {
  @ViewChild('tabSelect', { read: ElementRef })
  tabSelectRef: ElementRef;
  @ViewChild('contentLeftColumn')
  contentLeftColumnRef: ElementRef;

  summoner: Summoner;
  // TODO: Implement when the summoner page was last updated for a given summoner
  lastUpdated: string;
  tabOptions: string[] = [];
  selectedTab: SummonerTabOption;

  constructor(
    private _route: ActivatedRoute,
    private _summonersService: SummonersService
  ) {}

  ngOnInit(): void {
    Object.values(SummonerTabOption).forEach((value) =>
      this.tabOptions.push(value)
    );

    // Summoners retrieved on search in Home page is cached to prevent excess API calls
    const summonersJsonString = sessionStorage.getItem('summoners');
    const cachedSummoners: Summoner[] = JSON.parse(summonersJsonString);

    this._route.queryParams.subscribe(async (params) => {
      const summonerName = params['summonerName'];
      const region = params['region'];

      cachedSummoners.forEach(async (summoner) => {
        if (summoner.name === summonerName) {
          this.summoner = summoner;
        }
      });

      if (!this.summoner) {
        // API Call is only made if no summoner was cached
        this.summoner = await this._summonersService.getSummonerByName(
          summonerName,
          RegionMappings.regionMappings.get(region)
        );
      }
    });
  }

  ngAfterViewInit(): void {
    this.ensureLeftContentColumnWidthIsSameAsTabSelect();
  }

  onTabChange(selectedTab: string) {
    switch (selectedTab) {
      case SummonerTabOption.OVERVIEW:
        this.selectedTab = SummonerTabOption.OVERVIEW;
        break;

      case SummonerTabOption.CHAMPION_STATS:
        this.selectedTab = SummonerTabOption.CHAMPION_STATS;
        break;

      case SummonerTabOption.LIVE_GAME:
        this.selectedTab = SummonerTabOption.LIVE_GAME;
        break;

      default:
        break;
    }
  }

  private ensureLeftContentColumnWidthIsSameAsTabSelect() {
    this.contentLeftColumnRef.nativeElement.style.width = `${this.tabSelectRef.nativeElement.offsetWidth}px`;
  }
}
