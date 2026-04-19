import { Module } from '@nestjs/common';
import { NexsusBatchController } from './nexsus-batch.controller';
import { NexsusBatchService } from './nexsus-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [NexsusBatchController],
  providers: [NexsusBatchService],
})
export class NexsusBatchModule {}
