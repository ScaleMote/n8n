import { INodeProperties } from 'n8n-workflow';
import * as revokeAccountSponsorship from './revokeAccountSponsorship';
import * as revokeClaimableBalanceSponsorship from './revokeClaimableBalanceSponsorship';
import * as revokeDataSponsorship from './revokeDataSponsorship';
import * as revokeOfferSponsorship from './revokeOfferSponsorship';
import * as revokeSignerSponsorship from './revokeSignerSponsorship';
import * as revokeTrustlineSponsorship from './revokeTrustlineSponsorship';

export const revokeSponsorshipDescription: INodeProperties[] = [
	{
		displayName: 'Revoke Sponsorship Type',
		name: 'revokeSponsorshipType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
			},
		},
		default: 'revokeAccountSponsorship',
		options: [
			{
				name: 'Account',
				value: 'revokeAccountSponsorship',
			},
			{
				name: 'Claimable Balance',
				value: 'revokeClaimableBalanceSponsorship',
			},
			{
				name: 'Data',
				value: 'revokeDataSponsorship',
			},
			{
				name: 'Offer',
				value: 'revokeOfferSponsorship',
			},
			{
				name: 'Signer',
				value: 'revokeSignerSponsorship',
			},
			{
				name: 'Trustline',
				value: 'revokeTrustlineSponsorship',
			},
		],
	},
	...revokeAccountSponsorship.description,
	...revokeClaimableBalanceSponsorship.description,
	...revokeDataSponsorship.description,
	...revokeOfferSponsorship.description,
	...revokeSignerSponsorship.description,
	...revokeTrustlineSponsorship.description,
];
