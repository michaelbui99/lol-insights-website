import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-select-option',
  templateUrl: './tab-select-option.component.html',
  styleUrls: ['./tab-select-option.component.scss'],
})
export class TabSelectOptionComponent implements OnInit {
  @Input()
  optionText: string;
  @Input()
  selected: boolean;
  @Input()
  hoverTextColor: string;

  // A tab select option will emit the option text on click
  @Output()
  optionClick: EventEmitter<string> = new EventEmitter();

  isHovered: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleOnHover() {
    this.isHovered = !this.isHovered;
  }

  handleOnClick() {
    this.optionClick.emit(this.optionText);
  }
}
