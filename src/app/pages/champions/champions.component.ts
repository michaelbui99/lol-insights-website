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
  search: string = '';

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

  handleSearchInput(searchQuery: string) {
    if (!searchQuery) {
      this.championsToShow = this.allChampions;
    }
    this.championsToShow = this.allChampions.filter((champion) =>
      champion.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
