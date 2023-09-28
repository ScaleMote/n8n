import type { OffChainOperationType, TransactionType } from '../../types';
import type { IFeeRequest } from './IFeeRequest';

export class FeeRequest implements IFeeRequest {
	public operation: TransactionType;

	public type?: OffChainOperationType;

	public assetCode: string;

	public amount: number;

	constructor(request: IFeeRequest) {
		this.operation = request.operation;
		this.type = request.type;
		this.assetCode = request.assetCode;
		this.amount = request.amount;
	}
}
