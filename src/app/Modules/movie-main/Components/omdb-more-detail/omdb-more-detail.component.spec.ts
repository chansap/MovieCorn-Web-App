import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbMoreDetailComponent } from './omdb-more-detail.component';

describe('OmdbMoreDetailComponent', () => {
  let component: OmdbMoreDetailComponent;
  let fixture: ComponentFixture<OmdbMoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmdbMoreDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbMoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
