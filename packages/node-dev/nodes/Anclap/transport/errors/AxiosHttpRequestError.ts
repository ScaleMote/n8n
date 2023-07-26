import axios from 'axios';

export default class AxiosHttpRequestError extends Error {
	private error: any;

	constructor(error: any) {
		super();
		this.error = error;

		if (axios.isAxiosError(this.error)) {
			const errorStatus = error.response.status;
			const errorDetail = JSON.stringify(error.response.data);
			this.message = `${errorStatus} ${errorDetail}`;
		}
	}
}
