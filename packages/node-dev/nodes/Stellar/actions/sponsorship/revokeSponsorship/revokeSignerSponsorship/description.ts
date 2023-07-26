import { SponsorshipProperties } from '../../../entities/IStellarNode';

export const revokeSignerSponsorshipDescription: SponsorshipProperties = [
	{
		displayName: 'Account',
		name: 'account',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeSignerSponsorship'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
	},
	{
		displayName: 'Signer Type',
		name: 'signerType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeSignerSponsorship'],
			},
		},
		options: [
			{
				name: 'Ed25519 Public Key',
				value: 'ed25519PublicKey',
			},
			{
				name: 'Sha256 Hash',
				value: 'sha256Hash',
			},
			{
				name: 'Pre-Authorized Transaction Hash',
				value: 'preAuthTx',
			},
		],
		default: 'ed25519PublicKey',
	},
	{
		displayName: 'Signer',
		name: 'signerKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['sponsorship'],
				operation: ['revokeSponsorship'],
				revokeSponsorshipType: ['revokeSignerSponsorship'],
			},
		},
		default: '',
	},
];
