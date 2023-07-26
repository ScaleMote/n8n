import { INaturalPersonFileIdRequest } from './INaturalPersonFileIdRequest';

export default class NaturalPersonFileIdRequest implements INaturalPersonFileIdRequest {
	photoIdBackFileId?: string;
	photoIdFrontFileId?: string;
	notaryApprovalOfPhotoIdFileId?: string;
	photoProofResidenceFileId?: string;
	proofOfIncomeFileId?: string;
	proofOfLivenessFileId?: string;

	constructor(request: INaturalPersonFileIdRequest) {
		const {
			photoIdBackFileId,
			photoIdFrontFileId,
			notaryApprovalOfPhotoIdFileId,
			photoProofResidenceFileId,
			proofOfIncomeFileId,
			proofOfLivenessFileId,
		} = request;
		this.photoIdBackFileId = photoIdBackFileId;
		this.photoIdFrontFileId = photoIdFrontFileId;
		this.notaryApprovalOfPhotoIdFileId = notaryApprovalOfPhotoIdFileId;
		this.photoProofResidenceFileId = photoProofResidenceFileId;
		this.proofOfIncomeFileId = proofOfIncomeFileId;
		this.proofOfLivenessFileId = proofOfLivenessFileId;
	}
}
