import { IExecuteFunctions } from 'n8n-workflow';
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
	const revokeSponsorship = {
		revokeAccountSponsorship,
		revokeClaimableBalanceSponsorship,
		revokeDataSponsorship,
		revokeOfferSponsorship,
		revokeSignerSponsorship,
		revokeTrustlineSponsorship,
	};

	return await revokeSponsorship[revokeSponsorshipType].execute.call(this);
}
