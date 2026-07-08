import { Module } from '@nestjs/common';
import { NexsusBatchController } from './batch.controller';
import { NexsusBatchService } from './batch.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, ScheduleModule.forRoot()],
	controllers: [NexsusBatchController],
	providers: [NexsusBatchService],
})
export class BatchModule {}
