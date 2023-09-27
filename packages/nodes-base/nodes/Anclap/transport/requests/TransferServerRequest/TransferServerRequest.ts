import type { ITransferServerRequest } from './ITransferServerRequest';

export class TransferServerRequest implements ITransferServerRequest {
	public lang?: string;

	constructor(request: ITransferServerRequest) {
		const { lang } = request;

		this.lang = lang;
	}
}
