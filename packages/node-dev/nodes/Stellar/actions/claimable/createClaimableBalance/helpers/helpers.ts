import { Claimant } from 'stellar-sdk';
import ClaimantPredicate from 'stellar-sdk';
import IPredicate from '../../../entities/IPredicate';
import InvalidPredicateError from './../error/InvalidPredicateError';
import IClaimants from '../../../entities/IClaimants';

export default function buildClaimantsList(claimantsValues: IClaimants['values']) {
	const claimants: Claimant[] = [];
	claimantsValues.forEach((claimantValues) => {
		const destination = claimantValues.destination;
		const predicateValues = claimantValues.predicate.values;
		let predicate: typeof ClaimantPredicate;

		if (predicateValues.isPredicateConditional) {
			switch (predicateValues.predicateType) {
				case 'time':
					predicate = buildTimePredicate(predicateValues);
					break;

				case 'and':
					if (predicateValues.predicate1 && predicateValues.predicate2) {
						const andPredicate1 = buildPredicate(predicateValues.predicate1?.values);
						const andPredicate2 = buildPredicate(predicateValues.predicate2?.values);
						predicate = Claimant.predicateAnd(andPredicate1, andPredicate2);
					}
					break;

				case 'or':
					if (predicateValues.predicate1 && predicateValues.predicate2) {
						const orPredicate1 = buildPredicate(predicateValues.predicate1?.values);
						const orPredicate2 = buildPredicate(predicateValues.predicate2?.values);
						predicate = Claimant.predicateOr(orPredicate1, orPredicate2);
					}
					break;

				case 'not':
					if (predicateValues.predicate1) {
						const notPredicate = buildPredicate(predicateValues.predicate1?.values);
						predicate = Claimant.predicateNot(notPredicate);
					}
					break;

				default:
					throw InvalidPredicateError;
			}
		} else {
			predicate = Claimant.predicateUnconditional();
		}
		const claimant = new Claimant(destination, predicate);
		claimants.push(claimant);
	});

	return claimants;
}

function buildTimePredicate(predicateValues: IPredicate): typeof ClaimantPredicate {
	let predicate: typeof ClaimantPredicate;

	if (predicateValues.predicateTimeValue) {
		const predicateTimeValue = predicateValues.predicateTimeValue.toString();
		predicate = predicateValues.isPredicateTimeRelative
			? Claimant.predicateBeforeRelativeTime(predicateTimeValue)
			: Claimant.predicateBeforeAbsoluteTime(predicateTimeValue);
	} else {
		predicate = Claimant.predicateUnconditional();
	}

	return predicate;
}

function buildSubpredicate(subPredicateValues: IPredicate): typeof ClaimantPredicate {
	let subpredicate;
	if (subPredicateValues.isPredicateConditional) {
		subpredicate = buildTimePredicate(subPredicateValues);
	} else {
		subpredicate = Claimant.predicateUnconditional();
	}
	return subpredicate;
}

function buildPredicate(predicateValues: IPredicate): typeof ClaimantPredicate {
	let predicate;
	if (predicateValues.isPredicateConditional) {
		switch (predicateValues.predicateType) {
			case 'time':
				predicate = buildTimePredicate(predicateValues);
				break;

			case 'and':
				if (predicateValues.predicate1 && predicateValues.predicate2) {
					const andSubpredicate1 = buildSubpredicate(predicateValues.predicate1.values);
					const andSubpredicate2 = buildSubpredicate(predicateValues.predicate2.values);
					predicate = Claimant.predicateAnd(andSubpredicate1, andSubpredicate2);
				}
				break;

			case 'or':
				if (predicateValues.predicate1 && predicateValues.predicate2) {
					const orSubpredicate1 = buildSubpredicate(predicateValues.predicate1.values);
					const orSubpredicate2 = buildSubpredicate(predicateValues.predicate2.values);
					predicate = Claimant.predicateAnd(orSubpredicate1, orSubpredicate2);
				}
				break;

			case 'not':
				if (predicateValues.predicate1) {
					const notSubpredicate = buildSubpredicate(predicateValues.predicate1.values);
					predicate = Claimant.predicateNot(notSubpredicate);
				}
				break;

			default:
				throw InvalidPredicateError;
		}
	} else {
		predicate = Claimant.predicateUnconditional();
	}
	return predicate;
}
