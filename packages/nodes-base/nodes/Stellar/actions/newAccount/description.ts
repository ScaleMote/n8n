import type { NewAccountProperties } from '../entities/IStellarNode';

export const description: NewAccountProperties = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'createAccount',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['newAccount'],
			},
		},
		options: [
			{
				name: 'Create Account',
				value: 'createAccount',
				description: 'Create a new Stellar account',
				action: 'Create a new stellar account',
			},
		],
	},
];
