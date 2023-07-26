import { IExecuteFunctions } from 'n8n-workflow';
import NaturalPersonFileIdRequest from '../../../transport/requests/StandardFieldsRequest/NaturalPersonFileIdRequest';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP12 from '../../../transport/SEP12';

export async function sendBinaryFields(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const photoIdBackFileId = this.getNodeParameter('photoIdBackFileId', 0) as string;
	const photoIdFrontFileId = this.getNodeParameter('photoIdFrontFileId', 0) as string;
	const notaryApprovalOfPhotoIdFileId = this.getNodeParameter(
		'notaryApprovalOfPhotoIdFileId',
		0,
	) as string;
	const photoProofResidenceFileId = this.getNodeParameter('photoProofResidenceFileId', 0) as string;
	const proofOfIncomeFileId = this.getNodeParameter('proofOfIncomeFileId', 0) as string;
	const proofOfLivenessFileId = this.getNodeParameter('proofOfLivenessFileId', 0) as string;

	const sep12 = new SEP12(anclapCredentials, token);

	const binaryFieldIds = new NaturalPersonFileIdRequest({
		photoIdBackFileId,
		photoIdFrontFileId,
		notaryApprovalOfPhotoIdFileId,
		photoProofResidenceFileId,
		proofOfIncomeFileId,
		proofOfLivenessFileId,
	});

	return await sep12.sendKYCInformation(binaryFieldIds);
}
