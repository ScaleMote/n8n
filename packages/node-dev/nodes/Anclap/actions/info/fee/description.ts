import { INodeProperties } from 'n8n-workflow';

export const feeDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['fee'],
			},
		},
		default: '',
	},
	{
		displayName: 'Operation type',
		name: 'operationType',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['fee'],
			},
		},
		default: 'deposit',
		placeholder: 'deposit',
		description: 'Kind of operation (deposit or withdraw).',
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
				operation: ['fee'],
			},
		},
		default: 'sep24',
	},
	{
		displayName: 'Offchain Operation',
		name: 'type',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['fee'],
			},
		},
		default: 'bank_account',
		placeholder: 'bank_account',
		description: ' Type of deposit or withdrawal (SEPA, bank_account, cash, etc...).',
	},
	{
		displayName: 'Asset Code',
		name: 'assetCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['fee'],
			},
		},
		default: 'ARS',
		placeholder: 'ARS',
		description: 'Stellar asset code.',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['fee'],
			},
		},
		default: '',
		placeholder: '100',
		description: 'Amount of the asset that will be deposited/withdrawn.',
	},
];
