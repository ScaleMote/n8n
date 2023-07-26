import { FundAccountProperties } from '../entities/IStellarNode';

const description: FundAccountProperties = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'fundAccount',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fundAccount'],
			},
		},
		options: [
			{
				name: 'Fund Account with Friendbot',
				value: 'fundAccount',
				description: 'Get testnet lumens',
				action: 'Fund account in testnet',
			},
		],
	},
];

export default description;
