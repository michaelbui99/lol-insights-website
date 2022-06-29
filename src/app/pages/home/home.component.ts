import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/app/model/champion';
import { Regions } from 'src/app/model/regions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regions: string[] = [];
  selectedRegion: string = '';
  profileSuggestions: Champion[];

  constructor() {}

  ngOnInit(): void {
    Object.values(Regions).forEach((value) =>
      this.regions.push(value.toString())
    );

    const lastSelectedRegion = localStorage.getItem('lastSelectedRegion');
    if (lastSelectedRegion) {
      this.selectedRegion = lastSelectedRegion;
    }
    console.log(this.regions);
  }

  onRegionSelected(region: string) {
    localStorage.setItem('lastSelectedRegion', region);
  }
}
