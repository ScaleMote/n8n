export interface ICodesParam {
	codes: {
		code: string;
	}[];
}

export interface IIssuersParam {
	issuers: {
		issuer: string;
	}[];
}

export interface INodeAssets {
	codes: string[];
	issuers: string[];
}
