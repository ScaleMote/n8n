import { INodeProperties } from 'n8n-workflow';

export const transactionDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transaction'],
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
				name: 'SEP24',
				value: 'sep24',
			},
			{
				name: 'SEP6',
				value: 'sep6',
			},
		],
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transaction'],
			},
		},
		default: 'sep24',
	},
	{
		displayName: 'Transaction ID',
		name: 'id',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transaction'],
			},
		},
		default: '',
		placeholder: '06050341-97x2-410b-ba42-bec546abadea',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transaction'],
			},
		},
		default: false,
	},
	{
		displayName: 'Stellar Transaction ID',
		name: 'stellarTransactionId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transaction'],
			},
		},
		default: '',
		placeholder: '',
		description: 'The stellar transaction id of the transaction.',
	},
	{
		displayName: 'External Transaction ID',
		name: 'externalTransactionId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transaction'],
			},
		},
		default: '',
		placeholder: '',
		description: 'The external transaction id of the transaction.',
	},
	{
		displayName: 'Language',
		name: 'lang',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transaction'],
			},
		},
		default: '',
		placeholder: '',
		description:
			'Defaults to EN if not specified or if the specified language is not supported. Language code specified using RFC 4646. error fields and other human readable messages in the response should be in this language.',
	},
];
