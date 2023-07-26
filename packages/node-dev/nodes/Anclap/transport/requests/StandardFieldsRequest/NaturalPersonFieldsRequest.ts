import { INaturalPersonFieldsRequest } from './INaturalPersonFieldsRequest';

export default class NaturalPersonFieldsRequest implements INaturalPersonFieldsRequest {
	familyName?: string;
	lastName?: string;
	givenName?: string;
	firstName?: string;
	additionalName?: string;
	addressCountryCode?: string;
	stateOrProvince?: string;
	city?: string;
	postalCode?: string;
	address?: string;
	mobileNumber?: string;
	emailAddress?: string;
	birthDate?: string;
	birthPlace?: string;
	birthCountryCode?: string;
	bankAccountNumber?: string;
	taxId?: string;
	taxIdName?: string;
	occupation?: number;
	employerName?: string;
	employerAddress?: string;
	languageCode?: string;
	idType?: string;
	idCountryCode?: string;
	idIssueDate?: string;
	idExpirationDate?: string;
	idNumber?: string;
	photoIdFront?: string;
	photoIdBack?: string;
	notaryApprovalOfPhotoId?: string;
	ipAddress?: string;
	photoProofResidence?: string;
	sex?: string;
	proofOfIncome?: string;
	proofOfLiveness?: string;

	constructor(request: Omit<INaturalPersonFieldsRequest, 'constructor'>) {
		Object.assign(this, request);
	}
}
