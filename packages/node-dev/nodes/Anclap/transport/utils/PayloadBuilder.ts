export default class PayloadBuilder {
	private request: object;

	constructor(request: object) {
		this.request = request;
	}

	parseObjectKeyCaseType(caseTypeParser: Function): PayloadBuilder {
		this.request = Object.fromEntries(
			Object.entries(this.request).map(([key, value]) => [caseTypeParser(key), value]),
		);
		return this;
	}

	filterUndefinedValues(): PayloadBuilder {
		const filtered: Record<string, any> = {};

		for (const [key, value] of Object.entries(this.request)) {
			if (value !== undefined && value.length !== 0) {
				filtered[key] = value;
			}
		}

		this.request = filtered;
		return this;
	}

	build(): object {
		return this.request;
	}
}
