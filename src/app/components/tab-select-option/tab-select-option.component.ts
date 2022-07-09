import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-select-option',
  templateUrl: './tab-select-option.component.html',
  styleUrls: ['./tab-select-option.component.scss'],
})
export class TabSelectOptionComponent implements OnInit {
  @Input()
  optionText: string;

  constructor() {}

  ngOnInit(): void {}
}
