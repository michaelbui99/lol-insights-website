import { Component, Input, OnInit } from '@angular/core';
import { Summoner } from 'src/app/model/summoner';
import { SummonersService } from 'src/app/services/summoners.service';

@Component({
  selector: 'app-summoner-header',
  templateUrl: './summoner-header.component.html',
  styleUrls: ['./summoner-header.component.scss'],
})
export class SummonerHeaderComponent implements OnInit {
  @Input()
  summoner: Summoner;
  summonerIconUrl: string;
  shouldDisplayLastUpdated: boolean = false;

  constructor(private _summonersService: SummonersService) {}

  ngOnInit(): void {
    this.summonerIconUrl = this._summonersService.getSummonerIconUrl(
      this.summoner
    );
  }

  handleUpdateButtonHover() {
    this.shouldDisplayLastUpdated = !this.shouldDisplayLastUpdated;
  }
}
