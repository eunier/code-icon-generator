import { Test, TestingModule } from '@nestjs/testing';
import { FileDataProgressRepository } from './file-data-progress.repository';

describe (FileDataProgressRepository.name, () => {
  let service: FileDataProgressRepository;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [FileDataProgressRepository],
    }).compile ();

    service = module.get<FileDataProgressRepository> (
      FileDataProgressRepository,
    );
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
