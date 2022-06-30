import { Component, Input, OnInit } from '@angular/core';
import { Summoner } from 'src/app/model/summoner';
import { DDRAGON_IMG_PROFILE_ICON_URL } from 'src/app/config/config';
@Component({
  selector: 'app-profile-suggestion',
  templateUrl: './profile-suggestion.component.html',
  styleUrls: ['./profile-suggestion.component.scss'],
})
export class ProfileSuggestionComponent implements OnInit {
  @Input()
  summoner: Summoner;
  profileIconUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.profileIconUrl = `${DDRAGON_IMG_PROFILE_ICON_URL}/${this.summoner.profileIconId.toString()}.png`;
    console.log(this.profileIconUrl);
    console.log(this.summoner);
  }
}
