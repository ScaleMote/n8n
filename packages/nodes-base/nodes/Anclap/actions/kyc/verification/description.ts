import type { INodeProperties } from 'n8n-workflow';

export const verificationCodesDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['verificationCodes'],
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
				operation: ['verificationCodes'],
			},
		},
		default: 'sep12',
	},
	{
		displayName: 'Customer ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['verificationCodes'],
			},
		},
		default: '',
		description: 'The ID of the customer as returned in the response of a previous PUT request',
	},
	{
		displayName: 'Mobile Number Verification Code',
		name: 'mobileNumber',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['verificationCodes'],
			},
		},
		default: '',
	},
	{
		displayName: 'Email Address Verification Code.',
		name: 'emailAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['verificationCodes'],
			},
		},
		default: '',
	},
];
