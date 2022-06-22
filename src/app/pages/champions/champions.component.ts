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
  allChampions: Champion[];
  championsToShow: Champion[];
  search: string = '';

  constructor(
    private _router: Router,
    private _championsSerivce: ChampionsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.allChampions = await this._championsSerivce.getAll();
    this.championsToShow = this.allChampions;
  }

  handleChampionClick(champion: Champion) {}

  handleSearchInput() {
    if (!this.search) {
      this.championsToShow = this.allChampions;
      return;
    }
    const matchedChampions: Champion[] = [];

    this.allChampions.forEach((champion) => {
      if (
        champion.champion.name.toLowerCase().includes(this.search.toLowerCase())
      ) {
        matchedChampions.push(champion);
      }
    });

    this.championsToShow = matchedChampions;
  }
}
