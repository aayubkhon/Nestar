import { Injectable } from '@nestjs/common';

@Injectable()
export class NexsusBatchService {
  getHello(): string {
    return "Nexsus-batch API Server";
  }
}
