import type { ITransactionRequest } from './ITransactionRequest';

export class TransactionRequest implements ITransactionRequest {
	public id?: string;

	public stellarTransactionId?: string;

	public externalTransactionId?: string;

	public lang?: string;

	constructor(request: ITransactionRequest) {
		const { id, stellarTransactionId, externalTransactionId, lang } = request;

		this.id = id;
		this.stellarTransactionId = stellarTransactionId;
		this.externalTransactionId = externalTransactionId;
		this.lang = lang;
	}
}
