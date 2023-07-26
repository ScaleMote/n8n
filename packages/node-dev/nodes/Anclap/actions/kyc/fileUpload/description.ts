import { INodeProperties } from 'n8n-workflow';

export const fileUploadDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['fileUpload'],
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
				operation: ['fileUpload'],
			},
		},
		default: 'sep12',
	},
	{
		displayName: 'Binary File',
		name: 'file',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['fileUpload'],
			},
		},
		default: '',
		description:
			'A file to upload. The file should follow the specifications of RFC 2388 (which defines file transfers for the multipart/form-data protocol).',
	},
];
