import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['deleteKYCInformation'],
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
				operation: ['deleteKYCInformation'],
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
				operation: ['deleteKYCInformation'],
			},
		},
		default: false,
	},
	{
		displayName: 'Memo',
		name: 'memo',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['deleteKYCInformation'],
			},
		},
		default: '',
		description:
			"The client-generated memo that uniquely identifies the customer. If a memo is present in the decoded SEP-10 JWT's sub value, it must match this parameter value. If a muxed account is used as the JWT's sub value, memos sent in requests must match the 64-bit integer subaccount ID of the muxed account. See the Shared Accounts section for more information.",
	},
	{
		displayName: 'Memo Type',
		name: 'memoType',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['deleteKYCInformation'],
			},
		},
		default: '',
		description:
			"Type of memo. One of text, id or hash. Deprecated because memos should always be of type id, although anchors should continue to support this parameter for outdated clients. If hash, memo should be base64-encoded. If a memo is present in the decoded SEP-10 JWT's sub value, this parameter can be ignored. See the Shared Accounts section for more information.",
	},
];
