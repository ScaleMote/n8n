export default interface IFlags {
	values: {
		authorizationRequired: boolean;
		authorizationRevocable: boolean;
		authorizationInmutable?: boolean;
		authorizationClawbackEnabled: boolean;
	};
}
