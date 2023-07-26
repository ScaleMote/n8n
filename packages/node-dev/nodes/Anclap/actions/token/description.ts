import { INodeProperties } from 'n8n-workflow';
import { description as getDescription } from './get';
import { description as sendDescription } from './send';
import { description as validateDescription } from './validate';
import { description as signDescription } from './sign';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'get',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['token'],
			},
		},
		options: [
			{
				name: 'Get Challenge',
				value: 'get',
				action: 'Get challenge',
			},
			{
				name: 'Validate Challenge',
				value: 'validate',
				action: 'Validate challenge',
			},
			{
				name: 'Sign Challenge',
				value: 'sign',
				action: 'Sign challenge',
			},
			{
				name: 'Send Challenge',
				value: 'send',
				action: 'Send challenge',
			},
		],
	},
	...getDescription,
	...sendDescription,
	...validateDescription,
	...signDescription,
];

export default description;
