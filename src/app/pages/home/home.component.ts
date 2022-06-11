import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/app/model/regions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regions: string[] = [];
  selectedRegion: string = '';
  constructor() {}

  ngOnInit(): void {
    Object.values(Regions).forEach((value) =>
      this.regions.push(value.toString())
    );
    console.log(this.regions);
  }
}
