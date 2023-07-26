import { INodeProperties } from 'n8n-workflow';

export const sendChallengeDescription: INodeProperties[] = [
	{
		displayName: 'Signed XDR',
		name: 'signedXdr',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['token'],
				operation: ['send'],
			},
		},
		default: '',
	},
];
