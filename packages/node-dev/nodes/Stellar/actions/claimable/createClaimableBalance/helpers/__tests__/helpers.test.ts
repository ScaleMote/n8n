import { it, describe, expect } from 'vitest';
import { Claimant } from 'stellar-sdk';
import ClaimantPredicate from 'stellar-sdk';
import buildClaimantsList from '../helpers';

describe('buildClaimantsList', () => {
	it('should build a list of claimants', () => {
		const claimantsValues = [
			{
				destination: 'GACNMMSVWFCHYDC5TD2JX76DT6BSAEMXD7OK7UNOWTD2XG33DHH7MTFW',
				predicate: {
					values: {
						isPredicateConditional: true,
						predicateType: 'time',
						predicateTimeValue: 300,
						isPredicateTimeRelative: true,
					},
				},
			},
			{
				destination: 'GACNMMSVWFCHYDC5TD2JX76DT6BSAEMXD7OK7UNOWTD2XG33DHH7MTFW',
				predicate: {
					values: {
						isPredicateConditional: true,
						predicateType: 'and',
						predicate1: {
							values: {
								isPredicateConditional: false,
							},
						},
						predicate2: {
							values: {
								isPredicateConditional: true,
								predicateType: 'time',
								predicateTimeValue: 500,
								isPredicateTimeRelative: false,
							},
						},
					},
				},
			},
		];

		const claimantsList = buildClaimantsList(claimantsValues);
		claimantsList.forEach((claimant) => {
			expect(claimant).toBeInstanceOf(Claimant);
			expect(claimant.predicate).toBeTypeOf(typeof ClaimantPredicate);
		});
		expect(claimantsList).toEqual([
			{
				_destination: 'GACNMMSVWFCHYDC5TD2JX76DT6BSAEMXD7OK7UNOWTD2XG33DHH7MTFW',
				_predicate: Claimant.predicateBeforeRelativeTime('300'),
			},
			{
				_destination: 'GACNMMSVWFCHYDC5TD2JX76DT6BSAEMXD7OK7UNOWTD2XG33DHH7MTFW',
				_predicate: Claimant.predicateAnd(
					Claimant.predicateUnconditional(),
					Claimant.predicateBeforeAbsoluteTime('500'),
				),
			},
		]);
	});
});
