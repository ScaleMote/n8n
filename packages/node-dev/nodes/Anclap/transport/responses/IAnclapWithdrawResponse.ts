export default interface IAnclapWithdrawResponse {
	id: string;
	status: string;
	started_at: string;
	min_amount: number;
	max_amount: number;
	fee_fixed: number;
	fee_percent: number;
	amount_in: string;
	amount_out: string;
	amount_fee: string;
	kind: string;
	more_info_url: string;
	amount_in_asset: string;
	amount_out_asset: string;
	amount_fee_asset: string;
	how: string;
	memo: string;
	memo_type: string;
	to: string;
	eta: number;
}
