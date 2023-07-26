import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import { IKYCRequest } from '../../../transport/requests/KYCRequest/IKYCRequest';
import SEP12 from '../../../transport/SEP12';
import KYCRequest from '../../../transport/requests/KYCRequest/KYCRequest';

export async function getStatus(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const sep12 = new SEP12(anclapCredentials, token);

	let statusRequest: IKYCRequest;

	if (showOptionalValues) {
		const id = this.getNodeParameter('id', 0) as string;
		const memo = this.getNodeParameter('memo', 0) as string;
		const memoType = this.getNodeParameter('memoType', 0) as string;
		const type = this.getNodeParameter('type', 0) as string;
		const lang = this.getNodeParameter('lang', 0) as string;

		statusRequest = new KYCRequest({
			id,
			memo,
			memoType,
			type,
			lang,
		});

		return await sep12.getKYCStatus(statusRequest);
	}
	return await sep12.getKYCStatus();
}
