import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionListItemComponent } from './champion-list-item.component';

describe('ChampionListItemComponent', () => {
  let component: ChampionListItemComponent;
  let fixture: ComponentFixture<ChampionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
