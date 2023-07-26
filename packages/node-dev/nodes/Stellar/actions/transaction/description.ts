import { INodeProperties } from 'n8n-workflow';
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

export default description;
