import type { INodeProperties } from 'n8n-workflow';
import { description as memoToHexDescription } from './memoToHex';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'memoToHex',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['utils'],
			},
		},
		options: [
			{
				name: 'Convert Memo to HEX',
				value: 'memoToHex',
				action: 'Convert Memo to HEX',
			},
		],
	},
	...memoToHexDescription,
];
