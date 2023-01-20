import { TestBed } from '@angular/core/testing';

import { APIqueryService } from './apiquery.service';

describe('APIqueryService', () => {
  let service: APIqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
