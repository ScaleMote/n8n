import { INodeProperties } from 'n8n-workflow';
export const pricesDescription: INodeProperties[] = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['prices'],
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
				operation: ['prices'],
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
				operation: ['prices'],
			},
		},
		default: '',
		placeholder: 'iso4217:ARS',
		description: 'The asset you want to sell, using the Asset Identification Format.',
	},
	{
		displayName: 'Amount to sell',
		name: 'sellAmount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['prices'],
			},
		},
		default: '',
		placeholder: '1000',
		description: 'The amount of sell_asset the client would exchange for each of the buy_assets.',
	},
	{
		displayName: 'Show Optional Values',
		name: 'showOptionalValues',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				resource: ['info'],
				operation: ['prices'],
			},
		},
		default: false,
	},
	{
		displayName: 'Sell delivery method',
		name: 'sellDeliveryMethod',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['prices'],
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
				showOptionalValues: [true],
				resource: ['info'],
				operation: ['prices'],
			},
		},
		default: '',
		placeholder: 'local_bank_transfer_in',
		description:
			'One of the name values specified by the buy_delivery_methods array for the associated asset returned from GET /info. Can be provided if the user intends to receive an off-chain asset from the anchor but is not strictly required.',
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
				operation: ['prices'],
			},
		},
		default: '',
		placeholder: 'ARG',
		description:
			"The ISO 3166-1 alpha-3 code of the user's current address. Should be provided if there are two or more country codes available for the desired asset in GET /info.",
	},
];
