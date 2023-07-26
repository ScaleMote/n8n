import { INodeProperties } from 'n8n-workflow';
import * as setTrustline from './setTrustline';
import * as changeTrust from './changeTrust';

const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'changeTrust',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['trust'],
			},
		},
		options: [
			{
				name: 'Change Trust',
				value: 'changeTrust',
				description: 'Creates, updates, or deletes a trustline',
				action: 'Change trust',
			},
			{
				name: 'Set Trustline',
				value: 'setTrustline',
				description: 'Creates a trustline flag configuring operation',
				action: 'Set trustline',
			},
		],
	},
	...changeTrust.description,
	...setTrustline.description,
];

export default description;
