import { INodeProperties } from 'n8n-workflow';
import * as findLiquidityPool from './findLiquidityPool';
import * as findPayments from './findPayments';
const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'findLiquidityPool',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['server'],
			},
		},
		options: [
			{
				name: 'Find Liquidity Pool',
				value: 'findLiquidityPool',
				description: 'Find liquidity pools availables',
				action: 'Find liquidity pools availables',
			},
			{
				name: 'Find Payments',
				value: 'findPayments',
				description: 'Find payments received by an account',
				action: 'Find payments',
			},
		],
	},
	...findPayments.description,
	...findLiquidityPool.description,
];

export default description;
