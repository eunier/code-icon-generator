import { TestBed } from '@angular/core/testing';

import { CodeIconGeneratorStoreService } from './code-icon-generator-store.service';

describe('CodeIconGeneratorStoreService', () => {
  let service: CodeIconGeneratorStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeIconGeneratorStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
