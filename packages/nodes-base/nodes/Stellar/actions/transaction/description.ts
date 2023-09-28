import type { INodeProperties } from 'n8n-workflow';
import * as build from './build';
import * as sign from './sign';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'build',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
			},
		},
		options: [
			{
				name: 'Build Transaction',
				value: 'build',
				action: 'Build transaction',
			},
			{
				name: 'Sign Transaction',
				value: 'sign',
				action: 'Sign transaction',
			},
		],
	},
	...build.description,
	...sign.description,
];

// eslint-disable-next-line import/no-default-export
export default description;
