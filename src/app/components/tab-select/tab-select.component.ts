import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-select',
  templateUrl: './tab-select.component.html',
  styleUrls: ['./tab-select.component.scss'],
})
export class TabSelectComponent implements OnInit {
  @Input()
  selectOptions: string[] = [];
  // Tab Select will emit the text of the option, when a new option is selected
  @Output()
  selectedOptionChanged: EventEmitter<string> = new EventEmitter();

  selectedOption: string;

  constructor() {}

  ngOnInit(): void {
    // Defaults the selected option to the first of the provided options
    this.selectedOption = this.selectOptions[0];
    console.log(this.selectedOption);
  }

  handleOnOptionClick(optionText: string) {
    if (optionText) {
      this.selectedOption = optionText;
      this.selectedOptionChanged.emit(optionText);
    }
  }
}
