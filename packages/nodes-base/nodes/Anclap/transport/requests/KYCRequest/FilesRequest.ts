import type { IFilesRequest } from './IFilesRequest';

export class FilesRequest implements IFilesRequest {
	fileId?: string;

	customerId?: string;

	constructor(request: IFilesRequest) {
		const { fileId, customerId } = request;

		this.fileId = fileId;
		this.customerId = customerId;
	}
}
