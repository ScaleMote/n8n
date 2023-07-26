import { TrustProperties } from '../../entities/IStellarNode';

export const changeTrustDescription: TrustProperties = [
	{
		displayName: 'Asset Type',
		name: 'assetType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['trust'],
				operation: ['changeTrust'],
			},
		},
		options: [
			{
				name: 'Custom Asset',
				value: 'asset',
			},
			{
				name: 'Liquidity Pool Shares',
				value: 'liquidityPool',
			},
		],
		default: 'asset',
	},
	{
		displayName: 'Asset',
		name: 'asset',
		type: 'fixedCollection',
		default: {},
		required: true,
		options: [
			{
				name: 'values',
				displayName: 'Asset',
				values: [
					{
						displayName: 'Code',
						name: 'code',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Issuer',
						name: 'issuer',
						type: 'string',
						default: '',
						placeholder: 'GCEVJ...',
					},
				],
			},
		],
		displayOptions: {
			show: {
				assetType: ['asset'],
			},
		},
	},
	{
		displayName: 'Asset A',
		name: 'assetA',
		type: 'fixedCollection',
		default: {},
		required: true,
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
				assetType: ['liquidityPool'],
				resource: ['trust'],
				operation: ['changeTrust'],
			},
		},
	},

	{
		displayName: 'Asset B',
		name: 'assetB',
		type: 'fixedCollection',
		default: {},
		required: true,
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
				assetType: ['liquidityPool'],
				resource: ['trust'],
				operation: ['changeTrust'],
			},
		},
	},
	{
		displayName: 'Fee',
		name: 'fee',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				assetType: ['liquidityPool'],
			},
		},
		default: '',
		description: 'For now the only fee supported is 30',
	},
	{
		displayName: 'Trust Limit',
		name: 'trustLimit',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['trust'],
				operation: ['changeTrust'],
			},
		},
		default: '',
		description: 'Leave empty to default to the max int64. Set to 0 to remove the trust line.',
	},
];
