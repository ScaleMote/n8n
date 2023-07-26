import IDepositExchangeRequest from './IDepositExchangeRequest';

export default class DepositExchangeRequest implements IDepositExchangeRequest {
	public destinationAsset: string;
	public sourceAsset: string;
	public quoteId?: string;
	public memoType?: string;
	public memo?: string;
	public account?: string;
	public type: string;
	public walletName?: string;
	public walletUrl?: string;
	public lang?: string;
	public onChangeCallback?: string;
	public countryCode?: string;
	public claimableBalanceSupported?: string;
	public amount: string;

	constructor(request: IDepositExchangeRequest) {
		const {
			destinationAsset,
			sourceAsset,
			quoteId,
			memoType,
			memo,
			account,
			type,
			walletName,
			walletUrl,
			lang,
			onChangeCallback,
			countryCode,
			claimableBalanceSupported,
			amount,
		} = request;

		this.destinationAsset = destinationAsset;
		this.sourceAsset = sourceAsset;
		this.quoteId = quoteId;
		this.memoType = memoType;
		this.memo = memo;
		this.account = account;
		this.type = type;
		this.walletName = walletName;
		this.walletUrl = walletUrl;
		this.lang = lang;
		this.onChangeCallback = onChangeCallback;
		this.countryCode = countryCode;
		this.claimableBalanceSupported = claimableBalanceSupported;
		this.amount = amount;
	}
}
