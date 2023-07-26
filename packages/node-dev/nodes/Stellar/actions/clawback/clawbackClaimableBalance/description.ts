import { ClawbackProperties } from '../../entities/IStellarNode';

export const clawbackClaimableBalanceDescription: ClawbackProperties = [
	{
		displayName: 'Claimable Balance ID',
		name: 'balanceId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['clawback'],
				operation: ['clawbackClaimableBalance'],
			},
		},
		default: '',
		description: 'The BalanceID on the ClaimableBalanceEntry that the source account is claiming',
	},
];
