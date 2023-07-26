import { INodeProperties } from 'n8n-workflow';

export const signChallengeDescription: INodeProperties[] = [
	{
		displayName: 'Sign Challenge XDR',
		name: 'challengeXdr',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['token'],
				operation: ['sign'],
			},
		},
		default: '',
	},
];
