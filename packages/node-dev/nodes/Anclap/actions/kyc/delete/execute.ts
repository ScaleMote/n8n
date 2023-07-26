import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP12 from '../../../transport/SEP12';
import KYCDeleteRequest from '../../../transport/requests/KYCRequest/KYCDeleteRequest';

export async function deleteKYCInformation(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sep12 = new SEP12(anclapCredentials, token);

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	if (showOptionalValues) {
		const memo = this.getNodeParameter('memo', 0) as string;
		const memoType = this.getNodeParameter('memoType', 0) as string;

		const deleteRequest = new KYCDeleteRequest({
			memo,
			memoType,
		});
		return await sep12.deleteKYCInformation(deleteRequest);
	}

	return await sep12.deleteKYCInformation();
}
