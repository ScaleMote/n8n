import { INodeProperties } from 'n8n-workflow';
import * as bumpSequence from './bumpSequence';
import * as manageData from './manageData';
import * as setOptions from './setOptions';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'manageData',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['settings'],
			},
		},
		options: [
			{
				name: 'Manage Data',
				value: 'manageData',
				description: 'Sets, modifies, or deletes a Data Entry (name/value pair)',
				action: 'Manage data',
			},
			{
				name: 'Bump Sequence',
				value: 'bumpSequence',
				description: 'Bumps sequence number',
				action: 'Bump sequence',
			},
			{
				name: 'Set Options',
				value: 'setOptions',
				description: 'Sets various configuration options for an account',
				action: 'Set options',
			},
		],
	},
	...bumpSequence.description,
	...manageData.description,
	...setOptions.description,
];

export default description;
