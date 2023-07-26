import { INodeProperties } from 'n8n-workflow';

export const binaryRegistrationDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
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
				operation: ['binaryRegistration'],
			},
		},
		default: 'sep12',
	},
	{
		displayName: 'Photo ID Back File ID',
		name: 'photoIdBackFileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
			},
		},
		default: '',
		description:
			'The file ID returned when the customer uploaded the binary file for the "Photo ID back".',
	},
	{
		displayName: 'Photo ID Front File ID',
		name: 'photoIdFrontFileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
			},
		},
		default: '',
		description:
			'The file ID returned when the customer uploaded the binary file for the "Photo ID front".',
	},
	{
		displayName: 'Notary Approval of photo ID File ID',
		name: 'notaryApprovalOfPhotoIdFileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
			},
		},
		default: '',
		description:
			'The file ID returned when the customer uploaded the binary file for the "Notary Approval of photo ID".',
	},
	{
		displayName: 'Photo proof Residence File ID',
		name: 'photoProofResidenceFileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
			},
		},
		default: '',
		description:
			'The file ID returned when the customer uploaded the binary file for the "Photo proof Residence".',
	},
	{
		displayName: 'Proof of Income File ID',
		name: 'proofOfIncomeFileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
			},
		},
		default: '',
		description:
			'The file ID returned when the customer uploaded the binary file for the "Proof of Income".',
	},
	{
		displayName: 'Proof of Liveness File ID',
		name: 'proofOfLivenessFileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['binaryRegistration'],
			},
		},
		default: '',
		description:
			'The file ID returned when the customer uploaded the binary file for the "Proof of Liveness".',
	},
];
