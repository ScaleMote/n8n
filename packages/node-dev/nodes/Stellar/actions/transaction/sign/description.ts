import { TransactionProperties } from '../../entities/IStellarNode';

export const transactionSignerDescription: TransactionProperties = [
	{
		displayName: 'Submit Transaction',
		name: 'submit',
		type: 'boolean',
		default: false,
		description: 'Whether to submit the transaction after sign or not',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['sign'],
			},
		},
	},
	{
		displayName: 'Transaction XDR',
		name: 'xdr',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['sign'],
			},
		},
		required: true,
		default: '',
	},
	{
		displayName: 'Secret Keys',
		name: 'secretKeys',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['sign'],
			},
		},
		options: [
			{
				name: 'keys',
				displayName: 'Keys',
				values: [
					{
						displayName: 'Custom Name',
						name: 'name',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						typeOptions: {
							password: true,
						},
						required: true,
						default: '',
					},
				],
			},
		],
		default: {},
	},
];
