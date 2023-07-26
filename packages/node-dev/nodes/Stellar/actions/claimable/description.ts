import { INodeProperties } from 'n8n-workflow';
import * as claimClaimableBalance from './claimClaimableBalance';
import * as createClaimableBalance from './createClaimableBalance';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'createClaimableBalance',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['claimableBalance'],
			},
		},
		options: [
			{
				name: 'Create Claimable Balance',
				value: 'createClaimableBalance',
				description: 'Creates a claimable balance',
				action: 'Create claimable balance',
			},
			{
				name: 'Claim Claimable Balance',
				value: 'claimClaimableBalance',
				description: 'Claims a claimable balance',
				action: 'Claim claimable balance',
			},
		],
	},
	...createClaimableBalance.description,
	...claimClaimableBalance.description,
];

export default description;
