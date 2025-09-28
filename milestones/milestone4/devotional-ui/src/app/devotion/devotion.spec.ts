import { TestBed } from '@angular/core/testing';

import { Devotion } from './devotion';

describe('Devotion', () => {
  let service: Devotion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Devotion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
