import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-summoner-rank-card',
  templateUrl: './summoner-rank-card.component.html',
  styleUrls: ['./summoner-rank-card.component.scss'],
})
export class SummonerRankCardComponent implements AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
