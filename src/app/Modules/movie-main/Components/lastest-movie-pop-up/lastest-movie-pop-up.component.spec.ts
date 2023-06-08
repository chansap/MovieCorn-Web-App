import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestMoviePopUpComponent } from './lastest-movie-pop-up.component';

describe('LastestMoviePopUpComponent', () => {
  let component: LastestMoviePopUpComponent;
  let fixture: ComponentFixture<LastestMoviePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestMoviePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestMoviePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
