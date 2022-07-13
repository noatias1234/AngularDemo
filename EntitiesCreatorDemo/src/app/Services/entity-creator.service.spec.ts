import { TestBed } from '@angular/core/testing';

import { EntityCreatorService } from './entity-creator.service';

describe('EntityCreatorService', () => {
  let service: EntityCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
