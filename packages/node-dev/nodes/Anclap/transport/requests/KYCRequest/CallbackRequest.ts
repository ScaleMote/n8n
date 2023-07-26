import { ICallbackRequest } from './ICallbackRequest';

export default class CallbackRequest implements ICallbackRequest {
	url: string;
	id?: string;
	memo?: string;
	memoType?: string;
	account?: string;

	constructor(request: ICallbackRequest) {
		const { url, id, memo, memoType, account } = request;

		this.url = url;
		this.id = id;
		this.memo = memo;
		this.memoType = memoType;
		this.account = account;
	}
}
