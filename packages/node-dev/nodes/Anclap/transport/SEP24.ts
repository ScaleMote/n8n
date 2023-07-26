import axios from 'axios';
import AxiosHttpRequestError from './errors/AxiosHttpRequestError';
import TransactionsRequest from './requests/TransactionsRequest/TransactionsRequest';
import AnclapCredentials from './AnclapCredentials';
import queryBuilder from './utils/queryBuilder';
import TransactionRequest from './requests/TransactionRequest/TransactionRequest';
import FeeRequest from './requests/FeeRequest/FeeRequest';
import ITransferServerRequest from './requests/TransferServerRequest/ITransferServerRequest';
import IDepositRequest from './requests/DepositRequest/IDepositRequest';
import IWithdrawRequest from './requests/WithdrawRequest/IWithdrawRequest';
import convertToSnakeCase from './utils/convertToSnakeCase';
import PayloadBuilder from './utils/PayloadBuilder';

export default class SEP24 {
	private anclapCredentials: AnclapCredentials;
	private token: string;

	constructor(anclapCredentials: AnclapCredentials, token: string) {
		this.anclapCredentials = anclapCredentials;
		this.token = token;
	}

	async getDepositInteractiveUrl(request: IDepositRequest) {
		const toml = await this.anclapCredentials.getToml();
		request.account = this.anclapCredentials.publicKey;

		const payload = new PayloadBuilder(request).parseObjectKeyCaseType(convertToSnakeCase).build();

		try {
			const depositUrl = await axios.post(
				`${toml.TRANSFER_SERVER_SEP0024}/transactions/deposit/interactive`,
				payload,
				{ headers: { Authorization: `Bearer ${this.token}` } },
			);

			return depositUrl.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getWithdrawInteractiveUrl(request: IWithdrawRequest) {
		const toml = await this.anclapCredentials.getToml();
		request.account = this.anclapCredentials.publicKey;

		const payload = new PayloadBuilder(request).parseObjectKeyCaseType(convertToSnakeCase).build();

		try {
			const withdrawUrl = await axios.post(
				`${toml.TRANSFER_SERVER_SEP0024}/transactions/withdraw/interactive`,
				payload,
				{ headers: { Authorization: `Bearer ${this.token}` } },
			);

			return withdrawUrl.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getTransactions(request: TransactionsRequest) {
		const toml = await this.anclapCredentials.getToml();

		request.account = this.anclapCredentials.publicKey;
		const queryParams = queryBuilder(request);
		try {
			const transactions = await axios.get(
				`${toml.TRANSFER_SERVER_SEP0024}/transactions?${queryParams}`,
				{
					headers: { Authorization: `Bearer ${this.token}` },
				},
			);

			return transactions.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getTransactionById(request: TransactionRequest) {
		const toml = await this.anclapCredentials.getToml();

		const queryParams = queryBuilder(request);
		try {
			const transactionDetail = await axios.get(
				`${toml.TRANSFER_SERVER_SEP0024}/transaction?${queryParams}`,
				{
					headers: { Authorization: `Bearer ${this.token}` },
				},
			);

			return transactionDetail.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getFee(request: FeeRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			const queryParams = queryBuilder(request);

			const fee = await axios.get(`${toml.TRANSFER_SERVER_SEP0024}/fee?${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return fee.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getInfo(request?: ITransferServerRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			const url = request
				? `${toml.TRANSFER_SERVER_SEP0024}/info?${queryBuilder(request)}`
				: `${toml.TRANSFER_SERVER_SEP0024}/info`;
			const transferServerInfo = await axios.get(url);

			return transferServerInfo.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
