import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSuggestionComponent } from './profile-suggestion.component';

describe('ProfileSuggestionComponent', () => {
  let component: ProfileSuggestionComponent;
  let fixture: ComponentFixture<ProfileSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
