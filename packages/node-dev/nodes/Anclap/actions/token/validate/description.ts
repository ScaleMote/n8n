import { INodeProperties } from 'n8n-workflow';

export const validateChallengeDescription: INodeProperties[] = [
	{
		displayName: 'Challenge XDR',
		name: 'validateXdr',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['token'],
				operation: ['validate'],
			},
		},
		default: '',
	},
];
