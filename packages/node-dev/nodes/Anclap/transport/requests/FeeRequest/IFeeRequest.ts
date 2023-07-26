import { OffChainOperationType, TransactionType } from '../../types';

export default interface IFeeRequest {
	operation: TransactionType;
	type?: OffChainOperationType;
	assetCode: string;
	amount: number;
}
