import { TestBed } from '@angular/core/testing';

import { TmdbMovieSevService } from './tmdb-movie-sev.service';

describe('TmdbMovieSevService', () => {
  let service: TmdbMovieSevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbMovieSevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
