import { TestBed } from '@angular/core/testing';

import { TalentTableService } from './talent-table.service';

describe('TalentTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalentTableService = TestBed.get(TalentTableService);
    expect(service).toBeTruthy();
  });
});
