export default interface IPredicate {
	isPredicateConditional: boolean;
	predicateType?: string;
	isPredicateTimeRelative?: boolean;
	predicateTimeValue?: number;
	predicate1?: { values: IPredicate };
	predicate2?: { values: IPredicate };
}
