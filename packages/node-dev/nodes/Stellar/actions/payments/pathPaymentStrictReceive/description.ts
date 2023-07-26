import { PaymentsProperties } from '../../entities/IStellarNode';

export const pathPaymentStrictReceiveDescription: PaymentsProperties = [
	{
		displayName: 'Destination Account',
		name: 'destinationAccount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account public key',
	},
	{
		displayName: 'Sending Asset',
		name: 'sendingAsset',
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
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		description: 'Asset held by the destination account',
	},
	{
		displayName: 'Maximum Send Amount',
		name: 'maxSendAmount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		default: '',
		description:
			'The most the sender is willing to spend to take the paths to. Resulting amount may vary due to the offers in the orderbook.',
	},
	{
		displayName: 'Intermediate Path',
		name: 'intermediatePathAssets',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add new intermediate asset',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add new intermediate asset',
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
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		description:
			'The assets (other than send asset and destination asset) involved in the offers the path takes',
	},
	{
		displayName: 'Destination Asset',
		name: 'destinationAsset',
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
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		description: 'The asset the destination account receives',
	},
	{
		displayName: 'Destination Amount',
		name: 'destinationAmount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		default: '',
	},
	{
		displayName: 'Source Account',
		name: 'sourceAccount',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictReceive'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account public key',
	},
];
