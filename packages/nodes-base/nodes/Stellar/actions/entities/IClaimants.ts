import type { IPredicate } from './IPredicate';

export interface IClaimants {
	values: Array<{
		destination: string;
		predicate: { values: IPredicate };
	}>;
}
