import type { TransactionType } from '../../types';

export interface ITransactionsRequest {
	assetCode: string;
	account?: string;
	noOlderThan?: string;
	limit?: number;
	pagingId?: string;
	lang?: string;
	kind?: TransactionType;
}
