import axios from 'axios';
import AnclapCredentials from './AnclapCredentials';
import { IBinaryFieldRequest } from './requests/KYCRequest/IBinaryFieldRequest';
import { ICallbackRequest } from './requests/KYCRequest/ICallbackRequest';
import { IFilesRequest } from './requests/KYCRequest/IFilesRequest';
import { IKYCDeleteRequest } from './requests/KYCRequest/IKYCDeleteRequest';
import { IKYCRequest } from './requests/KYCRequest/IKYCRequest';
import { IKYCVerification } from './requests/KYCRequest/IKYCVerification';
import queryBuilder from './utils/queryBuilder';
import AxiosHttpRequestError from './errors/AxiosHttpRequestError';
import PayloadBuilder from './utils/PayloadBuilder';
import convertToSnakeCase from './utils/convertToSnakeCase';
import { IBaseStandardFieldsRequest } from './requests/StandardFieldsRequest/IBaseStandardFieldsRequest';

export default class SEP12 {
	private anclapCredentials: AnclapCredentials;
	private token: string;

	constructor(anclapCredentials: AnclapCredentials, token: string) {
		this.anclapCredentials = anclapCredentials;
		this.token = token;
	}

	async getKYCStatus(request?: IKYCRequest) {
		const toml = await this.anclapCredentials.getToml();

		const url = request
			? `${toml.KYC_SERVER}/customer?${queryBuilder(request)}`
			: `${toml.KYC_SERVER}/customer`;

		try {
			const kycStatus = await axios.get(url, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return kycStatus.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async sendKYCInformation(request: IBaseStandardFieldsRequest) {
		const toml = await this.anclapCredentials.getToml();

		const payload = new PayloadBuilder(request)
			.parseObjectKeyCaseType(convertToSnakeCase)
			.filterUndefinedValues()
			.build();

		try {
			const customerId = await axios.put(`${toml.KYC_SERVER}/customer`, payload, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return customerId.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async setCallbackUrl(request: ICallbackRequest) {
		const toml = await this.anclapCredentials.getToml();
		request.account = this.anclapCredentials.publicKey;

		const payload = new PayloadBuilder(request)
			.parseObjectKeyCaseType(convertToSnakeCase)
			.filterUndefinedValues()
			.build();

		try {
			const response = await axios.put(`${toml.KYC_SERVER}/customer/callback`, payload, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return response.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async sendVerificationCodes(request: IKYCVerification) {
		const toml = await this.anclapCredentials.getToml();

		const payload = new PayloadBuilder(request)
			.parseObjectKeyCaseType(convertToSnakeCase)
			.filterUndefinedValues()
			.build();

		try {
			const verificationStatus = await axios.put(
				`${toml.KYC_SERVER}/customer/verification`,
				payload,
				{ headers: { Authorization: `Bearer ${this.token}` } },
			);

			return verificationStatus.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async deleteKYCInformation(request?: IKYCDeleteRequest) {
		const toml = await this.anclapCredentials.getToml();

		if (!request) {
			request = {};
		}
		request.account = this.anclapCredentials.publicKey;
		const queryParams = queryBuilder(request);

		try {
			const deleteStatus = await axios.delete(`${toml.KYC_SERVER}/customer/${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return deleteStatus.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async uploadBinaryFile(request: IBinaryFieldRequest) {
		const toml = await this.anclapCredentials.getToml();

		try {
			const fileId = await axios.post(`${toml.KYC_SERVER}/customer/files`, request, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return fileId.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async getFiles(request?: IFilesRequest) {
		const toml = await this.anclapCredentials.getToml();

		const url = request
			? `${toml.KYC_SERVER}/customer/files?${queryBuilder(request)}`
			: `${toml.KYC_SERVER}/customer/files`;

		try {
			const files = await axios.get(url, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return files.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
