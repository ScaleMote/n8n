import type { IBinaryFieldRequest } from './IBinaryFieldRequest';

export class BinaryFieldRequest implements IBinaryFieldRequest {
	file: string;

	constructor(request: IBinaryFieldRequest) {
		this.file = request.file;
	}
}
