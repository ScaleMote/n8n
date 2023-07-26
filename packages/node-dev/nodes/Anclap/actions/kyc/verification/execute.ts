import { IExecuteFunctions } from 'n8n-workflow';
import SEP12 from '../../../transport/SEP12';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import { IKYCVerification } from '../../../transport/requests/KYCRequest/IKYCVerification';

export async function sendVerificationCodes(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const id = this.getNodeParameter('id', 0) as string;
	const mobileNumber = this.getNodeParameter('mobileNumber', 0) as string;
	const emailAddress = this.getNodeParameter('emailAddress', 0) as string;

	const sep12 = new SEP12(anclapCredentials, token);

	const verificationFields = {
		mobileNumber,
		emailAddress,
	};
	const verificationRequest = createVerificationRequest(id, verificationFields);

	return sep12.sendVerificationCodes(verificationRequest);
}

function createVerificationRequest(
	id: string,
	verificationFields: Record<string, string>,
): IKYCVerification {
	const verificationRequest: IKYCVerification = { id };

	for (const field in verificationFields) {
		if (verificationFields.hasOwnProperty(field)) {
			const verificationKey = `${field}Verification`;
			verificationRequest[verificationKey] = verificationFields[field];
		}
	}

	return verificationRequest;
}
