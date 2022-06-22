import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/app/model/champion';

@Component({
  selector: 'app-champion-list-item',
  templateUrl: './champion-list-item.component.html',
  styleUrls: ['./champion-list-item.component.scss'],
})
export class ChampionListItemComponent implements OnInit {
  @Input()
  champion: Champion;

  constructor() {}

  ngOnInit(): void {}
}
