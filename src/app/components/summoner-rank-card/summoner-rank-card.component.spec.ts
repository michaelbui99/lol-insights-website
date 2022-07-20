import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerRankCardComponent } from './summoner-rank-card.component';

describe('SummonerRankCardComponent', () => {
  let component: SummonerRankCardComponent;
  let fixture: ComponentFixture<SummonerRankCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerRankCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerRankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
