export default interface IAnclapTransferServerInfoResponse {
	deposit: { [key in AnclapAssetCode]: DepositAsset };
	withdraw: { [key in AnclapAssetCode]: WithdrawAsset };
}

export type AnclapAssetCode = 'ARS' | 'COP';

export type DepositAsset = {
	enabled: boolean;
	authentication_required: boolean;
	min_amount: number;
	max_amount: number;
	fee_fixed: number;
	fee_percent: number;
};

export type WithdrawAsset = {
	enabled: boolean;
	authentication_required: boolean;
	min_amount: number;
	max_amount: number;
	fee_fixed: number;
	fee_percent: number;
};
