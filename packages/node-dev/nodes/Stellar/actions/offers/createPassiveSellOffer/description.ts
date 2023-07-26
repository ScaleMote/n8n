import { INodeProperties } from 'n8n-workflow';

export const createPassiveSellOfferDescription: INodeProperties[] = [
	{
		displayName: 'Selling Asset',
		name: 'sellingAsset',
		type: 'fixedCollection',
		default: {},
		required: true,
		placeholder: 'Select asset',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'values',
				displayName: 'Asset',
				values: [
					{
						displayName: 'Asset Type',
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
						required: true,
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
						required: true,
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
				resource: ['offers'],
				operation: ['createPassiveSellOffer'],
			},
		},
		description: 'Asset the offer creator is selling',
	},
	{
		displayName: 'Buying Asset',
		name: 'buyingAsset',
		type: 'fixedCollection',
		default: {},
		required: true,
		placeholder: 'Select asset',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'values',
				displayName: 'Asset',
				values: [
					{
						displayName: 'Asset Type',
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
				resource: ['offers'],
				operation: ['createPassiveSellOffer'],
			},
		},
		description: 'Asset the offer creator is buying',
	},
	{
		displayName: 'Amount You Are Selling',
		name: 'sellingAmount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['offers'],
				operation: ['createPassiveSellOffer'],
			},
		},
		default: '',
		description: 'An amount of zero will delete the offer',
	},
	{
		displayName: 'Price of 1 Unit of Selling in Terms of Buying',
		name: 'price',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['offers'],
				operation: ['createPassiveSellOffer'],
			},
		},
		default: '',
	},
];
