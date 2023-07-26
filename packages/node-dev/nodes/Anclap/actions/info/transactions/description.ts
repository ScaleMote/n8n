import { INodeProperties } from 'n8n-workflow';

export const transactionsDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transactions'],
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
				operation: ['transactions'],
			},
		},
		default: 'sep24',
	},
	{
		displayName: 'Asset Code',
		name: 'assetCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transactions'],
			},
		},
		default: '',
		description: 'The code of the asset of interest. E.g. BTC, ETH, USD, INR, etc.',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['transactions'],
			},
		},
		default: false,
	},
	{
		displayName: 'No Older Than',
		name: 'noOlderThan',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transactions'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM-DD',
		description: 'The response should contain transactions starting on or after this date & time.',
	},
	{
		displayName: 'Limit Transactions Count',
		name: 'limit',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transactions'],
			},
		},
		default: '',
		placeholder: '10',
		description: 'The response should contain at most limit transactions.',
	},
	{
		displayName: 'Transaction Type',
		name: 'kind',
		type: 'options',
		required: false,
		options: [
			{
				name: 'Default',
				value: 'default',
			},
			{
				name: 'Withdraw',
				value: 'withdrawal',
			},
			{
				name: 'Deposit',
				value: 'deposit',
			},
			{
				name: 'Withdraw Exchange',
				value: 'withdrawal-exchange',
			},
			{
				name: 'Deposit Exchange',
				value: 'deposit-exchange',
			},
		],
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transactions'],
			},
		},
		default: '',
		description:
			'A list containing the desired transaction kinds. The possible values are deposit, deposit-exchange, withdrawal and withdrawal-exchange.',
	},
	{
		displayName: 'Paging ID',
		name: 'pagingId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['transactions'],
			},
		},
		default: '',
		placeholder: '10',
		description: 'The response should contain transactions starting prior to this ID (exclusive).',
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
				operation: ['transactions'],
			},
		},
		default: '',
		placeholder: 'en',
		description:
			'Defaults to EN if not specified or if the specified language is not supported. Language code specified using RFC 4646. error fields and other human readable messages in the response should be in this language.',
	},
];
