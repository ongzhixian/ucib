import { TestBed } from '@angular/core/testing';

import { FooLibService } from './foo-lib.service';

describe('FooLibService', () => {
  let service: FooLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
