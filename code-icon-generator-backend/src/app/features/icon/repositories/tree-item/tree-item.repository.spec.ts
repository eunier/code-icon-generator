import { Test, TestingModule } from '@nestjs/testing';
import { TreeItemRepository } from './tree-item.repository';

describe (TreeItemRepository.name, () => {
  let service: TreeItemRepository;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [TreeItemRepository],
    }).compile ();

    service = module.get<TreeItemRepository> (TreeItemRepository);
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
