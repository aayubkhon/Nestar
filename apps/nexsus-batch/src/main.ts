import { NestFactory } from '@nestjs/core';
import { NexsusBatchModule } from './nexsus-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(NexsusBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
