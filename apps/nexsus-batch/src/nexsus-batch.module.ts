import { Module } from '@nestjs/common';
import { NexsusBatchController } from './nexsus-batch.controller';
import { NexsusBatchService } from './nexsus-batch.service';

@Module({
  imports: [],
  controllers: [NexsusBatchController],
  providers: [NexsusBatchService],
})
export class NexsusBatchModule {}
