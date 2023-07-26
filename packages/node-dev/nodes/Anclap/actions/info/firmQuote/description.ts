import { INodeProperties } from 'n8n-workflow';

export const firmQuoteDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		required: true,
		options: [
			{
				name: 'SEP38',
				value: 'sep38',
			},
		],
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: 'sep38',
	},
	{
		displayName: 'Asset to sell',
		name: 'sellAsset',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: 'iso4217:ARS',
		description: 'The asset the client would like to sell. Ex. USDC:G..., iso4217:ARS',
	},
	{
		displayName: 'Amount to sell',
		name: 'sellAmount',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: '10000',
		description: 'The amount of sell_asset the client would exchange for each of the buy_assets.',
	},
	{
		displayName: 'Asset to buy',
		name: 'buyAsset',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: 'stellar:USDC:GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5',
		description: 'The asset the client would like to exchange for sell_asset.',
	},
	{
		displayName: 'Amount to buy',
		name: 'buyAmount',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: '1000',
		description: 'The amount of buy_asset the client would like to purchase with sell_asset.',
	},
	{
		displayName: 'Sell delivery method',
		name: 'sellDeliveryMethod',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: 'local_bank_transfer_in',
		description:
			'One of the name values specified by the sell_delivery_methods array for the associated asset returned from GET /info. Can be provided if the user is delivering an off-chain asset to the anchor but is not strictly required.',
	},
	{
		displayName: 'Buy delivery method',
		name: 'buyDeliveryMethod',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: 'local_bank_transfer_in',
		description:
			'One of the name values specified by the buy_delivery_methods array for the associated asset returned from GET /info. Can be provided if the user intends to receive an off-chain asset from the anchor but is not strictly required.',
	},
	{
		displayName: 'Protocol Context',
		name: 'context',
		type: 'options',
		required: true,
		options: [
			{
				name: 'SEP6',
				value: 'sep6',
			},
			{
				name: 'SEP24',
				value: 'sep24',
			},
			{
				name: 'SEP31',
				value: 'sep31',
			},
		],
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: '',
		description:
			'The context for what this quote will be used for. Must be one of sep6, sep24 or sep31.',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: false,
	},
	{
		displayName: 'Quote expiration date',
		name: 'expireAfter',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: 'YYYY-MM-DD',
		description:
			"The client's desired expires_at date and time for the quote. Anchors may choose an expires_at that occurs after the expire_after. Anchors should return 400 Bad Request if the an expiration on or after the requested value cannot be provided.",
	},
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['firmQuote'],
			},
		},
		default: '',
		placeholder: 'ARG',
		description:
			"The ISO 3166-1 alpha-3 code of the user's current address. Should be provided if there are two or more country codes available for the desired asset in GET /info.",
	},
];
