import axios from 'axios';
import { AxiosHttpRequestError } from './errors/AxiosHttpRequestError';
import type {
	IAnclapTransferServerInfoResponse,
	IAnclapWithdrawResponse,
} from './responses/responses';
import type { TransactionsRequest } from './requests/TransactionsRequest/TransactionsRequest';
import type { WithdrawRequest } from './requests/WithdrawRequest/WithdrawRequest';
import type { AnclapCredentials } from './AnclapCredentials';
import type { FeeRequest } from './requests/FeeRequest/FeeRequest';
import { queryBuilder } from './utils/queryBuilder';
import type { IAnclapDepositResponse } from './responses/IAnclapDepositResponse';
import type { IDepositRequest } from './requests/DepositRequest/IDepositRequest';
import type { IWithdrawExchangeRequest } from './requests/WithdrawRequest/IWithdrawExchangeRequest';
import type { IDepositExchangeRequest } from './requests/DepositRequest/IDepositExchangeRequest';
import type { ITransferServerRequest } from './requests/TransferServerRequest/ITransferServerRequest';
import type { TransactionRequest } from './requests/TransactionRequest/TransactionRequest';

export class SEP6 {
	private anclapCredentials: AnclapCredentials;

	private token: string;

	constructor(anclapCredentials: AnclapCredentials, token: string) {
		this.anclapCredentials = anclapCredentials;
		this.token = token;
	}

	async getInfo(request?: ITransferServerRequest): Promise<IAnclapTransferServerInfoResponse> {
		try {
			const toml = await this.anclapCredentials.getToml();

			const url = request
				? `${toml.TRANSFER_SERVER}/info?${queryBuilder(request)}`
				: `${toml.TRANSFER_SERVER}/info`;
			const transferServerInfo = await axios.get(url);

			return transferServerInfo.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async deposit(request: IDepositRequest): Promise<IAnclapDepositResponse> {
		try {
			const toml = await this.anclapCredentials.getToml();

			request.account = this.anclapCredentials.publicKey;
			const queryParams = queryBuilder(request);

			const depositInformation = await axios.get(`${toml.TRANSFER_SERVER}/deposit?${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});
			return depositInformation.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async withdraw(request: WithdrawRequest): Promise<IAnclapWithdrawResponse> {
		try {
			const toml = await this.anclapCredentials.getToml();

			request.account = this.anclapCredentials.publicKey;
			const queryParams = queryBuilder(request);

			const withdrawInformation = await axios.get(
				`${toml.TRANSFER_SERVER}/withdraw?${queryParams}`,
				{ headers: { Authorization: `Bearer ${this.token}` } },
			);

			return withdrawInformation.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getTransactions(request: TransactionsRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();

			request.account = this.anclapCredentials.publicKey;
			const queryParams = queryBuilder(request);

			const transactions = await axios.get(`${toml.TRANSFER_SERVER}/transactions?${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return transactions.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getTransactionById(request: TransactionRequest) {
		try {
			const toml = await this.anclapCredentials.getToml();
			const queryParams = queryBuilder(request);

			const transactionDetail = await axios.get(
				`${toml.TRANSFER_SERVER}/transaction?${queryParams}`,
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

			const fee = await axios.get(`${toml.TRANSFER_SERVER}/fee?${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return fee.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getDepositExchange(request: IDepositExchangeRequest): Promise<IAnclapDepositResponse> {
		try {
			const toml = await this.anclapCredentials.getToml();

			request.account = this.anclapCredentials.publicKey;
			const queryParams = queryBuilder(request);

			const depositInformation = await axios.get(
				`${toml.TRANSFER_SERVER}/deposit-exchange?${queryParams}`,
				{ headers: { Authorization: `Bearer ${this.token}` } },
			);

			return depositInformation.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getWithdrawExchange(request: IWithdrawExchangeRequest): Promise<IAnclapWithdrawResponse> {
		try {
			const toml = await this.anclapCredentials.getToml();

			request.account = this.anclapCredentials.publicKey;
			const queryParams = queryBuilder(request);

			const withdrawInformation = await axios.get(
				`${toml.TRANSFER_SERVER}/withdraw-exchange?${queryParams}`,
				{ headers: { Authorization: `Bearer ${this.token}` } },
			);

			return withdrawInformation.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
