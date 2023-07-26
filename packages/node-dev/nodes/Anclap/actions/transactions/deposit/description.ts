import { INodeProperties } from 'n8n-workflow';

export const depositDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['deposit'],
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
				operation: ['deposit'],
			},
		},
		default: 'ARS',
		description:
			"The code of the on-chain asset the user wants to get from the Anchor after doing an off-chain deposit. The value passed must match one of the codes listed in the /info response's deposit object.",
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'The amount of the asset the user would like to deposit with the anchor. This field may be necessary for the anchor to determine what KYC information is necessary to collect.',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'Type of deposit. If the anchor supports multiple deposit methods (e.g. SEPA or SWIFT), the wallet should specify type. This field may be necessary for the anchor to determine which KYC fields to collect.',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['transactions'],
				operation: ['deposit'],
			},
		},
		default: false,
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
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'Type of memo that the anchor should attach to the Stellar payment transaction, one of text, id or hash.',
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
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'Value of memo to attach to transaction, for hash this should be base64-encoded. Because a memo can be specified in the SEP-10 JWT for Shared Accounts, this field as well as memo_type can be different than the values included in the SEP-10 JWT. For example, a client application could use the value passed for this parameter as a reference number used to match payments made to account.',
	},
	{
		displayName: 'Email Address',
		name: 'emailAddress',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'Email address of depositor. If desired, an anchor can use this to send email updates to the user about the deposit.',
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
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'In communications / pages about the deposit, anchor should display the wallet name to the user to explain where funds are going.',
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
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			'Anchor should link to this when notifying the user that the transaction has completed.',
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
				operation: ['deposit'],
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
				operation: ['deposit'],
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
				operation: ['deposit'],
			},
		},
		default: '',
		description:
			"The ISO 3166-1 alpha-3 code of the user's current address. This field may be necessary for the anchor to determine what KYC information is necessary to collect.",
	},
	{
		displayName: 'Claimable balance supported',
		name: 'claimableBalanceSupported',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['transactions'],
				operation: ['deposit'],
			},
		},
		default: 'false',
		description:
			'true if the client supports receiving deposit transactions as a claimable balance, false otherwise.',
	},
];
