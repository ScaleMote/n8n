import { SponsorshipProperties } from '../../../entities/IStellarNode';

export const revokeDataSponsorshipDescription: SponsorshipProperties = [
	{
		displayName: 'Account',
		name: 'Account',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeDataSponsorship'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeDataSponsorship'],
			},
		},
		default: '',
	},
];
