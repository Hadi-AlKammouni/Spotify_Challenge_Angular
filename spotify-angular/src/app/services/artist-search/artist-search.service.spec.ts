import { TestBed } from '@angular/core/testing';

import { ArtistSearchService } from './artist-search.service';

describe('ArtistSearchService', () => {
  let service: ArtistSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
