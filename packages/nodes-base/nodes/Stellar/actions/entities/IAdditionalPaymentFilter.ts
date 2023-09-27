import type { IAsset } from './IAsset';

export interface IAdditionalPaymentFilter {
	values: {
		filter: 'firstPaymentFromAccount' | 'firstPaymentInAsset';
		accountFrom: string;
		assetInPayment: IAsset;
	};
}
