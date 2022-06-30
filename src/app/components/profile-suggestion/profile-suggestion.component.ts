import { Component, Input, OnInit } from '@angular/core';
import { Summoner } from 'src/app/model/summoner';
@Component({
  selector: 'app-profile-suggestion',
  templateUrl: './profile-suggestion.component.html',
  styleUrls: ['./profile-suggestion.component.scss'],
})
export class ProfileSuggestionComponent implements OnInit {
  @Input()
  summoner: Summoner;

  constructor() {}

  ngOnInit(): void {}
}
