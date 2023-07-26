export default interface BaseWithdrawRequest {
	type: string;
	dest: string;
	destExtra?: string;
	account?: string;
	memo?: string;
	memoType?: string;
	walletName?: string;
	walletUrl?: string;
	lang?: string;
	onChangeCallback?: string;
	amount: string;
	countryCode?: string;
	refundMemo?: string;
	refundMemoType?: string;
}
