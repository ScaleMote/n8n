import type { IExecuteFunctions } from 'n8n-workflow';
import * as revokeAccountSponsorship from './revokeAccountSponsorship';
import * as revokeClaimableBalanceSponsorship from './revokeClaimableBalanceSponsorship';
import * as revokeDataSponsorship from './revokeDataSponsorship';
import * as revokeOfferSponsorship from './revokeOfferSponsorship';
import * as revokeTrustlineSponsorship from './revokeTrustlineSponsorship';
import * as revokeSignerSponsorship from './revokeSignerSponsorship';
import type { revokeSponsorshipType } from '../../entities/IRevokeSponsorshipType';

export async function revokeSponsorship(this: IExecuteFunctions) {
	const revokeSponsorshipType = this.getNodeParameter(
		'revokeSponsorshipType',
		0,
	) as revokeSponsorshipType;

	// eslint-disable-next-line @typescript-eslint/no-shadow
	const revokeSponsorship = {
		revokeAccountSponsorship,
		revokeClaimableBalanceSponsorship,
		revokeDataSponsorship,
		revokeOfferSponsorship,
		revokeSignerSponsorship,
		revokeTrustlineSponsorship,
	};

	return revokeSponsorship[revokeSponsorshipType].execute.call(this);
}
