import { TransactionType } from '../../types';

export default interface ITransactionsRequest {
	assetCode: string;
	account?: string;
	noOlderThan?: string;
	limit?: number;
	pagingId?: string;
	lang?: string;
	kind?: TransactionType;
}
