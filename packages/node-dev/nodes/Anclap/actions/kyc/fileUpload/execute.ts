import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP12 from '../../../transport/SEP12';
import BinaryFieldRequest from '../../../transport/requests/KYCRequest/BinaryFieldRequest';

export async function uploadBinaryFile(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sep12 = new SEP12(anclapCredentials, token);

	const file = this.getNodeParameter('file', 0) as string;

	const binaryFieldRequest = new BinaryFieldRequest({ file });

	return await sep12.uploadBinaryFile(binaryFieldRequest);
}
