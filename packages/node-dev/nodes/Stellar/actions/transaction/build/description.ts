import { TransactionProperties } from '../../entities/IStellarNode';

export const transactionDescription: TransactionProperties = [
	{
		displayName: 'Source Account',
		name: 'publicKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['build'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account public key',
	},
	{
		displayName: 'Fee',
		name: 'fee',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['build'],
			},
		},
		default: '',
		placeholder: 'Leave empty if you want to use the base fee',
		description: 'Transaction fee',
	},
	{
		displayName: 'Memo',
		name: 'memo',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['build'],
			},
		},
		default: false,
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		default: '',
		description: 'A string encoded using either ASCII or UTF-8, up to 28-bytes long',
		displayOptions: {
			show: {
				memo: [true],
				resource: ['transaction'],
				operation: ['build'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		description: 'A 64-bit unsigned integer.',
		displayOptions: {
			show: {
				memo: [true],
				resource: ['transaction'],
				operation: ['build'],
			},
		},
	},
	{
		displayName: 'Hash',
		name: 'hash',
		type: 'string',
		default: '',
		description: 'A 32-byte hash.',
		displayOptions: {
			show: {
				memo: [true],
				resource: ['transaction'],
				operation: ['build'],
			},
		},
	},
	{
		displayName: 'Return',
		name: 'return',
		type: 'string',
		default: '',
		description:
			'A 32-byte hash intended to be interpreted as the hash of the transaction the sender is refunding.',
		displayOptions: {
			show: {
				memo: [true],
				resource: ['transaction'],
				operation: ['build'],
			},
		},
	},
	{
		displayName: 'Timeout (Seconds)',
		name: 'timeout',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['build'],
			},
		},
		default: 30,
		description: 'Time in seconds where the TX is valid',
	},
];
