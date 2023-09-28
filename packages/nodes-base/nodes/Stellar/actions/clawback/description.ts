import type { INodeProperties } from 'n8n-workflow';
import * as clawback from './clawback';
import * as clawbackClaimableBalance from './clawbackClaimableBalance';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'clawback',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['clawback'],
			},
		},
		options: [
			{
				name: 'Clawback',
				value: 'clawback',
				description: 'Creates a clawback operation',
				action: 'Clawback',
			},
			{
				name: 'Clawback Claimable Balance',
				value: 'clawbackClaimableBalance',
				description: 'End a sponsorship',
				action: 'Clawback claimable balance',
			},
		],
	},
	...clawback.description,
	...clawbackClaimableBalance.description,
];
