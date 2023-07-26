import { INodeProperties } from 'n8n-workflow';

export const withdrawDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdraw'],
			},
		},
		default: '',
	},
	{
		displayName: 'Asset Code',
		name: 'assetCode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdraw'],
			},
		},
		default: '',
		placeholder: 'ARS',
		description:
			"Code of the on-chain asset the user wants to withdraw. The value passed must match one of the codes listed in the /info response's withdraw object.",
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdraw'],
			},
		},
		default: '',
		placeholder: '5.00',
		description:
			'The amount of the asset the user would like to withdraw. This field may be necessary for the anchor to determine what KYC information is necessary to collect.',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdraw'],
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
				operation: ['withdraw'],
			},
		},
		default: '',
		placeholder: '12345454566',
		description:
			'The account that the user wants to withdraw their funds to. This can be a crypto account, a bank account number, IBAN, mobile number, or email address.',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['withdraw'],
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
				operation: ['withdraw'],
			},
		},
		default: '',
		description:
			'TThe account that the user wants to withdraw their funds to. This can be a crypto account, a bank account number, IBAN, mobile number, or email address.',
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
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
				operation: ['withdraw'],
			},
		},
		default: '',
		description:
			'The type of the refund_memo. Can be id, text, or hash. See the memos documentation for more information. If specified, refund_memo must also be specified.',
	},
];
