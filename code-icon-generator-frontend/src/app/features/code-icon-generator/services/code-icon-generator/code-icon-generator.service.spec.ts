import { TestBed } from '@angular/core/testing';

import { CodeIconGeneratorService } from './code-icon-generator.service';

describe('CodeIconGeneratorService', () => {
  let service: CodeIconGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeIconGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
