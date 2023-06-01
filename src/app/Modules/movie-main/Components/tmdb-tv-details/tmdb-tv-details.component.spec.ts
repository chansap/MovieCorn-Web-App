import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbTvDetailsComponent } from './tmdb-tv-details.component';

describe('TmdbTvDetailsComponent', () => {
  let component: TmdbTvDetailsComponent;
  let fixture: ComponentFixture<TmdbTvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbTvDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbTvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
