import { AccountMergeProperties } from '../../entities/IStellarNode';

export const accountMergeDescription: AccountMergeProperties = [
	{
		displayName: 'Destination Account',
		name: 'destinationAccount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountMerge'],
				operation: ['accountMerge'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
	},
];
