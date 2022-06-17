import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from 'src/app/model/champion';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  allChampions: Champion[] = [];
  championsToShow: Champion[] = [];

  constructor(
    private _router: Router,
    private _championsSerivce: ChampionsService
  ) {}

  ngOnInit(): void {
    this._championsSerivce
      .getAll()
      .subscribe((champions) => (this.allChampions = champions));
    this.championsToShow = this.allChampions;
  }

  handleChampionClick(champion: Champion) {}
}
