import type { OffChainOperationType, TransactionType } from '../../types';

export interface IFeeRequest {
	operation: TransactionType;
	type?: OffChainOperationType;
	assetCode: string;
	amount: number;
}
