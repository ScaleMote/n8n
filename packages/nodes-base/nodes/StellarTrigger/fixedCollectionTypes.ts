export interface ICodesParam {
	codes: Array<{
		code: string;
	}>;
}

export interface IIssuersParam {
	issuers: Array<{
		issuer: string;
	}>;
}

export interface INodeAssets {
	codes: string[];
	issuers: string[];
}
