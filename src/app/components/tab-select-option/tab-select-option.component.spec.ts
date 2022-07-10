import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSelectOptionComponent } from './tab-select-option.component';

describe('TabSelectOptionComponent', () => {
  let component: TabSelectOptionComponent;
  let fixture: ComponentFixture<TabSelectOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSelectOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
