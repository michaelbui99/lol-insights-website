import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSelectComponent } from './tab-select.component';

describe('TabSelectComponent', () => {
  let component: TabSelectComponent;
  let fixture: ComponentFixture<TabSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
