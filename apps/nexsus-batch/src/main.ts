import { NestFactory } from '@nestjs/core';
import { NexsusBatchModule } from './nexsus-batch.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(NexsusBatchModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
