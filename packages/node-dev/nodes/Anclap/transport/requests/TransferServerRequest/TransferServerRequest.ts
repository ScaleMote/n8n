import ITransferServerRequest from './ITransferServerRequest';

export default class TransferServerRequest implements ITransferServerRequest {
	public lang?: string;

	constructor(request: ITransferServerRequest) {
		const { lang } = request;

		this.lang = lang;
	}
}
