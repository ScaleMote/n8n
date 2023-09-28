import type { IQuoteRequest } from './IQuoteRequest';

export class QuoteRequest implements IQuoteRequest {
	id: string;

	constructor(request: IQuoteRequest) {
		this.id = request.id;
	}
}
