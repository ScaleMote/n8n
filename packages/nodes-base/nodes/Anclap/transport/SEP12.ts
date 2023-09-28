import axios from 'axios';
import type { AnclapCredentials } from './AnclapCredentials';
import type { IBinaryFieldRequest } from './requests/KYCRequest/IBinaryFieldRequest';
import type { ICallbackRequest } from './requests/KYCRequest/ICallbackRequest';
import type { IFilesRequest } from './requests/KYCRequest/IFilesRequest';
import type { IKYCDeleteRequest } from './requests/KYCRequest/IKYCDeleteRequest';
import type { IKYCRequest } from './requests/KYCRequest/IKYCRequest';
import type { IKYCVerification } from './requests/KYCRequest/IKYCVerification';
import { queryBuilder } from './utils/queryBuilder';
import { AxiosHttpRequestError } from './errors/AxiosHttpRequestError';
import { PayloadBuilder } from './utils/PayloadBuilder';
import { convertToSnakeCase } from './utils/convertToSnakeCase';
import type { IBaseStandardFieldsRequest } from './requests/StandardFieldsRequest/IBaseStandardFieldsRequest';
import FormData from 'form-data';
import { getImageFormatFromBase64 } from './utils/imageFormatFromBase64';

export class SEP12 {
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
			const { data } = await axios.get(url, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return data;
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
			const { data } = await axios.put(`${toml.KYC_SERVER}/customer`, payload, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return data;
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
			const { data } = await axios.put(`${toml.KYC_SERVER}/customer/callback`, payload, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return data;
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
			const { data } = await axios.put(`${toml.KYC_SERVER}/customer/verification`, payload, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return data;
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
			const { data } = await axios.delete(`${toml.KYC_SERVER}/customer/${queryParams}`, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async uploadBinaryFile(request: IBinaryFieldRequest) {
		const toml = await this.anclapCredentials.getToml();

		const imageFormat = getImageFormatFromBase64(request.file);
		if (!imageFormat) {
			throw new Error('Invalid image format, try again.');
		}

		const imageBuffer = Buffer.from(request.file, 'base64');

		const formData = new FormData();
		formData.append('file', imageBuffer, `file.${imageFormat}`);

		try {
			const { data } = await axios.post(`${toml.KYC_SERVER}/customer/files`, formData, {
				headers: { Authorization: `Bearer ${this.token}`, 'Content-Type': 'multipart/form-data' },
			});

			return data;
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
			const { data } = await axios.get(url, {
				headers: { Authorization: `Bearer ${this.token}` },
			});

			return data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
