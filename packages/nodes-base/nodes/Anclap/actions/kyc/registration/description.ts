import type { INodeProperties } from 'n8n-workflow';

export const registrationDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		required: true,
		options: [
			{
				name: 'SEP12',
				value: 'sep12',
			},
		],
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: 'sep12',
	},
	{
		displayName: 'Family Name',
		name: 'familyName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'Given Name',
		name: 'givenName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'Additional Name',
		name: 'additionalName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Middle name or other additional name',
	},
	{
		displayName: 'Address Country Code',
		name: 'addressCountryCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Country code for current address',
	},
	{
		displayName: 'State or Province',
		name: 'stateOrProvince',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Name of state/province/region/prefecture',
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Name of city/town',
	},
	{
		displayName: 'Postal Code',
		name: 'postalCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: "Postal or other code identifying user's locale",
	},
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description:
			'Entire address (country, state, postal code, street address, etc...) as a multi-line string',
	},
	{
		displayName: 'Mobile Number',
		name: 'mobileNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Mobile phone number with country code, in E.164 format',
	},
	{
		displayName: 'Email Address',
		name: 'emailAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'Birth Date',
		name: 'birthDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Date of birth, e.g. 1976-07-04',
	},
	{
		displayName: 'Birth Place',
		name: 'birthPlace',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Place of birth (city, state, country; as on passport)',
	},
	{
		displayName: 'Birth Country Code',
		name: 'birthCountryCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'ISO Code of country of birth',
	},
	{
		displayName: 'Bank Account Number',
		name: 'bankAccountNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Number identifying bank account',
	},
	{
		displayName: 'Tax ID',
		name: 'taxId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Tax identifier of user in their country (social security number in US)',
	},
	{
		displayName: 'Tax ID Name',
		name: 'taxIdName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Name of the tax ID (SSN or ITIN in the US)',
	},
	{
		displayName: 'Occupation ISCO Code',
		name: 'occupation',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'Employer Name',
		name: 'employerName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Name of employer',
	},
	{
		displayName: 'Employer Address',
		name: 'employerAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Address of employer',
	},
	{
		displayName: 'Language Code',
		name: 'languageCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Primary language',
	},
	{
		displayName: 'ID Type',
		name: 'idType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Passport, drivers_license, id_card, etc',
	},
	{
		displayName: 'ID Country Code',
		name: 'idCountryCode',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Country issuing passport or photo ID as ISO 3166-1 alpha-3 code',
	},
	{
		displayName: 'ID Issue Date',
		name: 'idIssueDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'ID Expiration Date',
		name: 'idExpirationDate',
		type: 'dateTime',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
	},
	{
		displayName: 'ID Number',
		name: 'idNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Passport or ID number',
	},
	{
		displayName: 'IP Address',
		name: 'ipAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: "IP address of customer's computer",
	},
	{
		displayName: 'Sex',
		name: 'sex',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['registration'],
			},
		},
		default: '',
		description: 'Male, female, or other',
	},
];
