import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerHeaderComponent } from './summoner-header.component';

describe('SummonerHeaderComponent', () => {
  let component: SummonerHeaderComponent;
  let fixture: ComponentFixture<SummonerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
