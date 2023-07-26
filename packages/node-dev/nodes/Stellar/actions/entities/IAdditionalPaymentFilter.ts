import IAsset from './IAsset';

export default interface IAdditionalPaymentFilter {
	values: {
		filter: 'firstPaymentFromAccount' | 'firstPaymentInAsset';
		accountFrom: string;
		assetInPayment: IAsset;
	};
}
