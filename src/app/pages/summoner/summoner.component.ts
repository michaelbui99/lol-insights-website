import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss'],
})
export class SummonerComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }
}
