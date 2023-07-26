import IWithdrawRequest from './IWithdrawRequest';

export default class WithdrawRequest implements IWithdrawRequest {
	public assetCode: string;
	public type: string;
	public dest: string;
	public amount: string;
	public destExtra?: string;
	public account?: string;
	public memo?: string;
	public memoType?: string;
	public walletName?: string;
	public walletUrl?: string;
	public lang?: string;
	public onChangeCallback?: string;
	public countryCode?: string;
	public refundMemo?: string;
	public refundMemoType?: string;

	constructor(request: IWithdrawRequest) {
		const {
			assetCode,
			dest,
			destExtra,
			memoType,
			memo,
			account,
			type,
			walletName,
			walletUrl,
			lang,
			onChangeCallback,
			countryCode,
			amount,
			refundMemo,
			refundMemoType,
		} = request;

		this.assetCode = assetCode;
		this.type = type;
		this.dest = dest;
		this.amount = amount;
		this.destExtra = destExtra;
		this.account = account;
		this.memo = memo;
		this.memoType = memoType;
		this.walletName = walletName;
		this.walletUrl = walletUrl;
		this.lang = lang;
		this.onChangeCallback = onChangeCallback;
		this.countryCode = countryCode;
		this.refundMemo = refundMemo;
		this.refundMemoType = refundMemoType;
	}
}
