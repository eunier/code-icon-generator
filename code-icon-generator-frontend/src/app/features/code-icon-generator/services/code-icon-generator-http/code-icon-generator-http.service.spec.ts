import { TestBed } from '@angular/core/testing';

import { CodeIconGeneratorHttpService } from './code-icon-generator-http.service';

describe('CodeIconGeneratorHttpService', () => {
  let service: CodeIconGeneratorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeIconGeneratorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
