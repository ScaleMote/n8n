export default interface IAnclapTomlResponse {
	NETWORK_PASSPHRASE: string;
	ACCOUNTS: string[];
	TRANSFER_SERVER: string;
	TRANSFER_SERVER_SEP0024: string;
	WEB_AUTH_ENDPOINT: string;
	SIGNING_KEY: string;
	KYC_SERVER: string;
	DIRECT_PAYMENT_SERVER: string;
	ANCHOR_QUOTE_SERVER: string;
	CURRENCIES: Currencies[];
	DOCUMENTATION: Documentation;
	PRINCIPALS: { name: string };
}

type Currencies = {
	code: string;
	issuer: string;
	decimals: number;
	name: string;
	desc: string;
	is_asset_anchored: boolean;
	anchor_asset_type: string;
	status: string;
	attestation_of_reserve: string;
	image: string;
};

type Documentation = {
	ORG_NAME: string;
	ORG_DBA: string;
	ORG_URL: string;
	ORG_DESCRIPTION: string;
	ORG_KEYBASE: string;
	ORG_TWITTER: string;
	ORG_OFFICIAL_EMAIL: string;
	ORG_SUPPORT_EMAIL: string;
};
