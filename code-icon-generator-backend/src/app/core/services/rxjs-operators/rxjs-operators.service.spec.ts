import { Test, TestingModule } from '@nestjs/testing';
import { RxjsOperatorsService } from './rxjs-operators.service';

describe ('RxjsOperatorsService', () => {
  let service: RxjsOperatorsService;

  beforeEach (async () => {
    const module: TestingModule = await Test.createTestingModule ({
      providers: [RxjsOperatorsService],
    }).compile ();

    service = module.get<RxjsOperatorsService> (RxjsOperatorsService);
  });

  it ('should be defined', () => {
    expect (service).toBeDefined ();
  });
});
