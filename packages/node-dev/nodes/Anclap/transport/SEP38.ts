import AnclapCredentials from './AnclapCredentials';
import AxiosHttpRequestError from './errors/AxiosHttpRequestError';
import IPriceRequest from './requests/PricesRequest/IPriceRequest';
import IPricesRequest from './requests/PricesRequest/IPricesRequest';
import IQuotePostRequest from './requests/PricesRequest/IQuotePostRequest';
import IQuoteRequest from './requests/PricesRequest/IQuoteRequest';
import convertToSnakeCase from './utils/convertToSnakeCase';
import PayloadBuilder from './utils/PayloadBuilder';
import queryBuilder from './utils/queryBuilder';
import axios from 'axios';

export default class SEP38 {
	private anclapCredentials: AnclapCredentials;
	private token: string;

	constructor(anclapCredentials: AnclapCredentials, token: string) {
		this.anclapCredentials = anclapCredentials;
		this.token = token;
	}

	async getInfo() {
		try {
			const toml = await this.anclapCredentials.getToml();
			const quoteServerInfo = await axios.get(`${toml.ANCHOR_QUOTE_SERVER}/info`);

			return quoteServerInfo.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getPrices(request: IPricesRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			const queryParams = queryBuilder(request);
			const prices = await axios.get(`${toml.ANCHOR_QUOTE_SERVER}/prices?${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return prices.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getPrice(request: IPriceRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			const queryParams = queryBuilder(request);
			const price = await axios.get(`${toml.ANCHOR_QUOTE_SERVER}/price?${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});
			return price.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getFirmQuote(request: IQuotePostRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			const payload = new PayloadBuilder(request)
				.parseObjectKeyCaseType(convertToSnakeCase)
				.filterUndefinedValues()
				.build();

			const firmQuote = await axios.post(`${toml.ANCHOR_QUOTE_SERVER}/quote`, payload, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return firmQuote.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getQuoteById(request: IQuoteRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			const quote = await axios.get(`${toml.ANCHOR_QUOTE_SERVER}/quote/${request.id}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return quote.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
