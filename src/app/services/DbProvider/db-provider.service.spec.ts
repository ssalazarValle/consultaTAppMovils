import { TestBed } from '@angular/core/testing';

import { DbProviderService } from './db-provider.service';

describe('DbProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbProviderService = TestBed.get(DbProviderService);
    expect(service).toBeTruthy();
  });
});
