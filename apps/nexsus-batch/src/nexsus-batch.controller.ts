import { Controller, Get } from '@nestjs/common';
import { NexsusBatchService } from './nexsus-batch.service';

@Controller()
export class NexsusBatchController {
  constructor(private readonly nexsusBatchService: NexsusBatchService) {}

  @Get()
  getHello(): string {
    return this.nexsusBatchService.getHello();
  }
}
