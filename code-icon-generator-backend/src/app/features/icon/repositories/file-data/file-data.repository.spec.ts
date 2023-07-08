import { Test, TestingModule } from '@nestjs/testing';
import { FileDataRepository } from './file-data.repository';

describe (FileDataRepository.name, () => {
  let service: FileDataRepository;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [FileDataRepository],
    }).compile ();

    service = module.get<FileDataRepository> (FileDataRepository);
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
