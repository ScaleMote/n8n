import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP12 from '../../../transport/SEP12';
import NaturalPersonFieldsRequest from '../../../transport/requests/StandardFieldsRequest/NaturalPersonFieldsRequest';

export async function sendFields(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sep12 = new SEP12(anclapCredentials, token);

	const familyName = this.getNodeParameter('familyName', 0) as string;
	const lastName = this.getNodeParameter('lastName', 0) as string;
	const givenName = this.getNodeParameter('givenName', 0) as string;
	const firstName = this.getNodeParameter('firstName', 0) as string;
	const additionalName = this.getNodeParameter('additionalName', 0) as string;
	const addressCountryCode = this.getNodeParameter('addressCountryCode', 0) as string;
	const stateOrProvince = this.getNodeParameter('stateOrProvince', 0) as string;
	const city = this.getNodeParameter('city', 0) as string;
	const postalCode = this.getNodeParameter('postalCode', 0) as string;
	const address = this.getNodeParameter('address', 0) as string;
	const mobileNumber = this.getNodeParameter('mobileNumber', 0) as string;
	const emailAddress = this.getNodeParameter('emailAddress', 0) as string;
	const birthDate = this.getNodeParameter('birthDate', 0) as string;
	const birthPlace = this.getNodeParameter('birthPlace', 0) as string;
	const birthCountryCode = this.getNodeParameter('birthCountryCode', 0) as string;
	const bankAccountNumber = this.getNodeParameter('bankAccountNumber', 0) as string;
	const taxId = this.getNodeParameter('taxId', 0) as string;
	const taxIdName = this.getNodeParameter('taxIdName', 0) as string;
	const occupation = this.getNodeParameter('occupation', 0) as number;
	const employerName = this.getNodeParameter('employerName', 0) as string;
	const employerAddress = this.getNodeParameter('employerAddress', 0) as string;
	const languageCode = this.getNodeParameter('languageCode', 0) as string;
	const idType = this.getNodeParameter('idType', 0) as string;
	const idCountryCode = this.getNodeParameter('idCountryCode', 0) as string;
	const idIssueDate = this.getNodeParameter('idIssueDate', 0) as string;
	const idExpirationDate = this.getNodeParameter('idExpirationDate', 0) as string;
	const idNumber = this.getNodeParameter('idNumber', 0) as string;
	const ipAddress = this.getNodeParameter('ipAddress', 0) as string;
	const sex = this.getNodeParameter('sex', 0) as string;

	const kycInformation = new NaturalPersonFieldsRequest({
		familyName,
		lastName,
		givenName,
		firstName,
		additionalName,
		addressCountryCode,
		stateOrProvince,
		city,
		postalCode,
		address,
		mobileNumber,
		emailAddress,
		birthDate,
		birthPlace,
		birthCountryCode,
		bankAccountNumber,
		taxId,
		taxIdName,
		occupation,
		employerName,
		employerAddress,
		languageCode,
		idType,
		idCountryCode,
		idIssueDate,
		idExpirationDate,
		idNumber,
		ipAddress,
		sex,
	});

	return await sep12.sendKYCInformation(kycInformation);
}
