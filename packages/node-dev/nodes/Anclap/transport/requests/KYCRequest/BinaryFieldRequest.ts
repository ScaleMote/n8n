import { IBinaryFieldRequest } from './IBinaryFieldRequest';

export default class BinaryFieldRequest implements IBinaryFieldRequest {
	file: string;

	constructor(request: IBinaryFieldRequest) {
		this.file = request.file;
	}
}
