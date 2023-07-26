export default interface IAsset {
	values: {
		code: string;
		issuer: string;
		isNative?: boolean;
	};
}
