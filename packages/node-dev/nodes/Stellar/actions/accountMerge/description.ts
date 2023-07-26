import { INodeProperties } from 'n8n-workflow';
import * as accountMerge from './accountMerge';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'accountMerge',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['accountMerge'],
			},
		},
		options: [
			{
				name: 'Account Merge',
				value: 'accountMerge',
				description:
					'Transfers the native balance (the amount of XLM an account holds) to another account and removes the source account from the ledger',
				action: 'Merge account',
			},
		],
	},
	...accountMerge.description,
];

export default description;
