import { IExecuteFunctions } from 'n8n-workflow';
import QuoteRequest from '../../../transport/requests/PricesRequest/QuoteRequest';
import SEP38 from '../../../transport/SEP38';
import AnclapCredentials from '../../../transport/AnclapCredentials';

export async function getQuote(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const id = this.getNodeParameter('id', 0) as string;

	const sep38 = new SEP38(anclapCredentials, token);

	const quoteRequest = new QuoteRequest({ id });

	return await sep38.getQuoteById(quoteRequest);
}
