import { INodeProperties } from 'n8n-workflow';
import * as liquidityPoolWithdraw from './liquidityPoolWithdraw';
import * as liquidityPoolDeposit from './liquidityPoolDeposit';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'liquidityPoolDeposit',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['liquidityPool'],
			},
		},
		options: [
			{
				name: 'Liquidity Pool Deposit',
				value: 'liquidityPoolDeposit',
				description: 'Deposits assets into a liquidity pool',
				action: 'Liquidity pool deposit',
			},
			{
				name: 'Liquidity Pool Withdraw',
				value: 'liquidityPoolWithdraw',
				description: 'Withdraw assets from a liquidity pool',
				action: 'Liquidity pool withdraw',
			},
		],
	},
	...liquidityPoolDeposit.description,
	...liquidityPoolWithdraw.description,
];

export default description;
