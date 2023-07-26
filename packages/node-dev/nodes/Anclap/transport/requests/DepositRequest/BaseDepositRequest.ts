export default interface BaseDepositRequest {
	account?: string;
	memoType?: string;
	memo?: string;
	emailAddress?: string;
	type: string;
	walletName?: string;
	walletUrl?: string;
	lang?: string;
	onChangeCallback?: string;
	countryCode?: string;
	claimableBalanceSupported?: string;
	amount: string;
}
