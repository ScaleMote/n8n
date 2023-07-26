import IPredicate from './IPredicate';

export default interface IClaimants {
	values: {
		destination: string;
		predicate: { values: IPredicate };
	}[];
}
