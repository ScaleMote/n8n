import { INodeProperties } from 'n8n-workflow';

export const withdrawExchangeDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
	},
	{
		displayName: 'Source Asset',
		name: 'sourceAsset',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		placeholder: 'stellar:USDC:GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5',
		description:
			"Code of the on-chain asset the user wants to withdraw. The value passed must match one of the codes listed in the /info response's withdraw-exchange object.",
	},
	{
		displayName: 'Destination Asset',
		name: 'destinationAsset',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		placeholder: 'iso4217:ARS',
		description:
			"The off-chain asset the Anchor will deliver to the user's account. The value must match one of the asset values included in a SEP-38 GET /prices?sell_asset=stellar:<source_asset>:<asset_issuer> response using SEP-38 Asset Identification Format.",
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		placeholder: '5.00',
		description:
			"The amount of the on-chain asset (source_asset) the user would like to send to the anchor's Stellar account. This field may be necessary for the anchor to determine what KYC information is necessary to collect. Should be equals to quote.sell_amount if a quote_id was used.",
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: 'bank_account',
		description:
			'Type of withdrawal. Can be: crypto, bank_account, cash, mobile, bill_payment or other custom values. This field may be necessary for the anchor to determine what KYC information is necessary to collect.',
	},
	{
		displayName: 'User Account Destination',
		name: 'dest',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		placeholder: '12345454566',
		description:
			'TThe account that the user wants to withdraw their funds to. This can be a crypto account, a bank account number, IBAN, mobile number, or email address.',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: false,
	},
	{
		displayName: 'Destination Extra info',
		name: 'destExtra',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'TThe account that the user wants to withdraw their funds to. This can be a crypto account, a bank account number, IBAN, mobile number, or email address.',
	},
	{
		displayName: 'Quote Id',
		name: 'quoteId',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			"The id returned from a SEP-38 POST /quote response. If this parameter is provided and the Stellar transaction used to send the asset to the Anchor has a created_at timestamp earlier than the quote's expires_at attribute, the Anchor should respect the conversion rate agreed in that quote. If the values of destination_asset, source_asset and amount conflict with the ones used to create the SEP-38 quote, this request should be rejected with a 400.",
	},
	{
		displayName: 'Memo',
		name: 'memo',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'This field should only be used if SEP-10 authentication is not. It was originally intended to distinguish users of the same Stellar account. However if SEP-10 is supported, the anchor should use the sub value included in the decoded SEP-10 JWT instead. See the Shared Account Authentication section for more information.',
	},
	{
		displayName: 'Memo Type',
		name: 'memoType',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'Type of memo. One of text, id or hash. Deprecated because memos used to identify users of the same Stellar account should always be of type of id.',
	},
	{
		displayName: 'Wallet Name',
		name: 'walletName',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'In communications / pages about the withdrawal, anchor should display the wallet name to the user to explain where funds are coming from.',
	},
	{
		displayName: 'Wallet Url',
		name: 'walletUrl',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			"Anchor can show this to the user when referencing the wallet involved in the withdrawal (ex. in the anchor's transaction history).",
	},
	{
		displayName: 'Language',
		name: 'lang',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'Defaults to EN if not specified or if the specified language is not supported. Language code specified using RFC 4646. error fields and other human readable messages in the response should be in this language.',
	},
	{
		displayName: 'Callback Url',
		name: 'onChangeCallback',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'A URL that the anchor should POST a JSON message to when the status property of the transaction created as a result of this request changes. The JSON message should be identical to the response format for the /transaction endpoint. The callback needs to be signed by the anchor and the signature needs to be verified by the wallet according to the callback signature specification.',
	},
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			"The ISO 3166-1 alpha-3 code of the user's current address. This field may be necessary for the anchor to determine what KYC information is necessary to collect.",
	},
	{
		displayName: 'Refund Memo',
		name: 'refundMemo',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'The memo the anchor must use when sending refund payments back to the user. If not specified, the anchor should use the same memo used by the user to send the original payment. If specified, refund_memo_type must also be specified.',
	},
	{
		displayName: 'Refund Memo Type',
		name: 'refundMemoType',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['withdrawExchange'],
			},
		},
		default: '',
		description:
			'The type of the refund_memo. Can be id, text, or hash. See the memos documentation for more information. If specified, refund_memo must also be specified.',
	},
];
