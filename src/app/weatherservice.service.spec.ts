/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Weatherservice } from './weatherservice.service';

describe('Service: Weatherservice.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Weatherservice]
    });
  });

  it('should ...', inject([Weatherservice], (service: Weatherservice) => {
    expect(service).toBeTruthy();
  }));
});
