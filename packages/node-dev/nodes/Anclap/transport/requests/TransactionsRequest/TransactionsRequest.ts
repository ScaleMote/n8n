import { TransactionType } from '../../types';
import ITransactionsRequest from './ITransactionsRequest';

export default class TransactionsRequest implements ITransactionsRequest {
	public assetCode: string;
	public account?: string;
	public noOlderThan?: string;
	public limit?: number;
	public pagingId?: string;
	public lang?: string;
	public kind?: TransactionType;

	constructor(request: ITransactionsRequest) {
		const { assetCode, kind, account, noOlderThan, limit, pagingId, lang } = request;

		this.account = account;
		this.assetCode = assetCode;
		this.noOlderThan = noOlderThan;
		this.limit = limit;
		this.pagingId = pagingId;
		this.lang = lang;
		this.kind = kind;
	}
}
