import { SwapAssetsProperties } from '../../entities/IStellarNode';

export const swapAssetsDescription: SwapAssetsProperties = [
	{
		displayName: 'Public Key',
		name: 'publicKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['swapAssets'],
				operation: ['swap'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account public key',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['swap'],
				resource: ['swapAssets'],
			},
		},
		default: '',
		placeholder: '100',
	},
	{
		displayName: 'Slippage',
		name: 'slippage',
		type: 'collection',
		placeholder: 'Select slippage tolerance',
		required: true,
		default: {},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'options',
				options: [
					{
						name: '0.1%',
						value: '0.1',
					},
					{
						name: '1.0%',
						value: '1.0',
					},
					{
						name: '2.0%',
						value: '2.0',
					},
				],
				default: '0.1',
			},
		],
		displayOptions: {
			show: {
				resource: ['swapAssets'],
				operation: ['swap'],
			},
		},
	},
	{
		displayName: 'Source Asset',
		name: 'sourceAsset',
		type: 'fixedCollection',
		default: {},
		required: true,
		placeholder: 'Select source asset',
		options: [
			{
				name: 'values',
				displayName: 'Asset',
				values: [
					{
						displayName: 'Asset',
						name: 'isNative',
						type: 'options',
						required: true,

						options: [
							{
								name: 'Native',
								value: true,
							},
							{
								name: 'Custom Asset',
								value: false,
							},
						],
						default: true,
					},
					{
						displayName: 'Code',
						name: 'code',
						type: 'string',
						default: '',
						displayOptions: {
							show: {
								isNative: [false],
							},
						},
					},
					{
						displayName: 'Issuer',
						name: 'issuer',
						type: 'string',
						default: '',
						placeholder: 'GCEVJ...',
						displayOptions: {
							show: {
								isNative: [false],
							},
						},
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['swapAssets'],
				operation: ['swap'],
			},
		},
	},
	{
		displayName: 'Destination Asset',
		name: 'destinationAsset',
		type: 'fixedCollection',
		default: {},
		required: true,
		placeholder: 'Select destination asset',
		options: [
			{
				name: 'values',
				displayName: 'Asset',
				values: [
					{
						displayName: 'Asset',
						name: 'isNative',
						type: 'options',
						required: true,

						options: [
							{
								name: 'Native',
								value: true,
							},
							{
								name: 'Custom Asset',
								value: false,
							},
						],
						default: true,
					},
					{
						displayName: 'Code',
						name: 'code',
						type: 'string',
						default: '',
						displayOptions: {
							show: {
								isNative: [false],
							},
						},
					},
					{
						displayName: 'Issuer',
						name: 'issuer',
						type: 'string',
						default: '',
						placeholder: 'GCEVJ...',
						displayOptions: {
							show: {
								isNative: [false],
							},
						},
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['swapAssets'],
				operation: ['swap'],
			},
		},
	},
];
