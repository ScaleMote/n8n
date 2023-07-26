import { IKYCDeleteRequest } from './IKYCDeleteRequest';

export default class KYCDeleteRequest implements IKYCDeleteRequest {
	account?: string;
	memo?: string;
	memoType?: string;

	constructor(request: IKYCDeleteRequest) {
		const { account, memo, memoType } = request;

		this.account = account;
		this.memo = memo;
		this.memoType = memoType;
	}
}
