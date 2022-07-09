import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-select',
  templateUrl: './tab-select.component.html',
  styleUrls: ['./tab-select.component.scss'],
})
export class TabSelectComponent implements OnInit {
  @Input()
  selectOptions: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
