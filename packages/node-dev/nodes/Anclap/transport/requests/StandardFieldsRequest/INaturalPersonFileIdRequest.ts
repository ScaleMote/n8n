import { IBaseStandardFieldsRequest } from './IBaseStandardFieldsRequest';

export interface INaturalPersonFileIdRequest extends IBaseStandardFieldsRequest {
	photoIdBackFileId?: string;
	photoIdFrontFileId?: string;
	notaryApprovalOfPhotoIdFileId?: string;
	photoProofResidenceFileId?: string;
	proofOfIncomeFileId?: string;
	proofOfLivenessFileId?: string;
}
