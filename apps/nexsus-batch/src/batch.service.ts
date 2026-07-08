import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
	getHello(): string {
		return 'Nexsus-batch API Server';
	}

	public async batchRollback(): Promise<void> {
		console.log('batchRollback');
	}
	public async batchProperties(): Promise<void> {
		console.log('batchRollback');
	}
	public async batchAgebts(): Promise<void> {
		console.log('batchRollback');
	}
}
