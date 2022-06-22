import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/app/model/champion';
import { DDRAGON_IMG_CHAMPION_SQUARE_URL } from 'src/app/config/config';
@Component({
  selector: 'app-champion-list-item',
  templateUrl: './champion-list-item.component.html',
  styleUrls: ['./champion-list-item.component.scss'],
})
export class ChampionListItemComponent implements OnInit {
  @Input()
  champion: Champion;
  iconUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.iconUrl = `${DDRAGON_IMG_CHAMPION_SQUARE_URL}/${this.champion.champion.image.full}`;
  }
}
