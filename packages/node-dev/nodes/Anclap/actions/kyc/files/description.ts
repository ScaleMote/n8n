import { INodeProperties } from 'n8n-workflow';

export const filesDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['files'],
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
				operation: ['files'],
			},
		},
		default: 'sep12',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['files'],
			},
		},
		default: false,
	},
	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['files'],
			},
		},
		default: '',
		description:
			"The file_id returned from a previous POST /customer/files request. The response's files list will contain a single object if this parameter is used.",
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['files'],
			},
		},
		default: '',
		description:
			'The id returned from a previous PUT /customer request. The response should include all files uploaded for the specified customer.',
	},
];
