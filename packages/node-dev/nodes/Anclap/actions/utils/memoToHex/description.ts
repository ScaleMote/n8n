import { INodeProperties } from 'n8n-workflow';

export const memoToHexDescription: INodeProperties[] = [
	{
		displayName: 'Memo to Convert',
		name: 'memo',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['utils'],
				operation: ['memoToHex'],
			},
		},
		default: '',
		description: 'The memo given by the anchor that needs to be encoded from base64 to hex',
	},
];
