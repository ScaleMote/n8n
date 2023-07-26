import { SponsorshipProperties } from '../../../entities/IStellarNode';

export const revokeOfferSponsorshipDescription: SponsorshipProperties = [
	{
		displayName: 'Seller',
		name: 'seller',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeOfferSponsorship'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
	},
	{
		displayName: 'Offer ID',
		name: 'offerId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeOfferSponsorship'],
			},
		},
		description: 'Offer ID is a number',
		default: '',
	},
];
