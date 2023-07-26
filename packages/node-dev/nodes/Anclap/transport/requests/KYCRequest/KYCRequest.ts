import { IKYCRequest } from './IKYCRequest';

export default class KYCRequest implements IKYCRequest {
	type?: string;
	lang?: string;
	id?: string;
	memo?: string;
	memoType?: string;

	constructor(request: IKYCRequest) {
		const { type, lang, id, memo, memoType } = request;

		this.type = type;
		this.lang = lang;
		this.id = id;
		this.memo = memo;
		this.memoType = memoType;
	}
}
