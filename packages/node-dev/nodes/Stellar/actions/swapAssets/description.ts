import { INodeProperties } from 'n8n-workflow';
import * as swap from './swap';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'swap',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['swapAssets'],
			},
		},
		options: [
			{
				name: 'Swap',
				value: 'swap',
				description: 'Get swap assets transaction',
				action: 'Get swap assets transaction',
			},
		],
	},
	...swap.description,
];

export default description;
