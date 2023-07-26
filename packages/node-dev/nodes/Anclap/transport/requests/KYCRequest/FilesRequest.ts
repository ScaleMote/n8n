import { IFilesRequest } from './IFilesRequest';

export default class FilesRequest implements IFilesRequest {
	fileId?: string;
	customerId?: string;

	constructor(request: IFilesRequest) {
		const { fileId, customerId } = request;

		this.fileId = fileId;
		this.customerId = customerId;
	}
}
