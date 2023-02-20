import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbMovieDetailsComponent } from './tmdb-movie-details.component';

describe('TmdbMovieDetailsComponent', () => {
  let component: TmdbMovieDetailsComponent;
  let fixture: ComponentFixture<TmdbMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbMovieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
