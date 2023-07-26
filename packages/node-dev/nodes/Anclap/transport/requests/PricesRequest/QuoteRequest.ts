import IQuoteRequest from './IQuoteRequest';

export default class QuoteRequest implements IQuoteRequest {
	id: string;

	constructor(request: IQuoteRequest) {
		this.id = request.id;
	}
}
