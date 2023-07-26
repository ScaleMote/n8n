import { ICodesParam, IIssuersParam, INodeAssets } from '../fixedCollectionTypes';

export function validateTx(tx: any, assets: INodeAssets): boolean {
	if (!assets.codes.length && !assets.issuers.length) {
		return true;
	}

	return (
		assets.codes.includes(tx.asset_code || tx.asset_type) ||
		assets.issuers.includes(tx.asset_issuer)
	);
}

export function mapFixedCollectionAssets(
	codesParam: ICodesParam,
	issuersParam: IIssuersParam,
): INodeAssets {
	let codes: string[] = [];
	let issuers: string[] = [];

	if (codesParam.codes) {
		codes = codesParam.codes.map((codes) => {
			return codes.code;
		});
	}

	if (issuersParam.issuers) {
		issuers = issuersParam.issuers.map((issuers) => {
			return issuers.issuer;
		});
	}

	return { codes, issuers };
}
