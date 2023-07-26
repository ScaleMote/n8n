import { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['kyc'],
				operation: ['status'],
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
				operation: ['status'],
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
				operation: ['status'],
			},
		},
		default: false,
	},
	{
		displayName: 'Customer ID',
		name: 'id',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['status'],
			},
		},
		default: '',
		placeholder: '',
		description:
			'The ID of the customer as returned in the response of a previous PUT request. If the customer has not been registered, they do not yet have an id.',
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
				operation: ['status'],
			},
		},
		default: '',
		placeholder: '',
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
				operation: ['status'],
			},
		},
		default: '',
		placeholder: '',
		description:
			"Type of memo. One of text, id or hash. Deprecated because memos should always be of type id, although anchors should continue to support this parameter for outdated clients. If hash, memo should be base64-encoded. If a memo is present in the decoded SEP-10 JWT's sub value, this parameter can be ignored. See the Shared Accounts section for more information.",
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['status'],
			},
		},
		default: '',
		placeholder: '',
		description:
			'The type of action the customer is being KYCd for. See the Type Specification below.',
	},
	{
		displayName: 'Language',
		name: 'lang',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['kyc'],
				operation: ['status'],
			},
		},
		default: '',
		placeholder: '',
		description:
			'Defaults to EN. Language code specified using ISO 639-1. Human readable descriptions, choices, and messages should be in this language.',
	},
];
