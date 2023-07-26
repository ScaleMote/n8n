import { PaymentsProperties } from '../../entities/IStellarNode';

export const pathPaymentStrictSendDescription: PaymentsProperties = [
	{
		displayName: 'Destination Account',
		name: 'destinationAccount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictSend'],
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
				operation: ['pathPaymentStrictSend'],
			},
		},
		description: 'Asset held by the destination account',
	},
	{
		displayName: 'Send Amount',
		name: 'sendAmount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictSend'],
			},
		},
		default: '',
		description: 'Amount to be transfer',
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
				operation: ['pathPaymentStrictSend'],
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
				operation: ['pathPaymentStrictSend'],
			},
		},
		description: 'The asset the destination account receives',
	},
	{
		displayName: 'Minimum Destination Amount',
		name: 'minDestinationAmount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['pathPaymentStrictSend'],
			},
		},
		default: '',
		description: 'The minimum amount the destination can receive',
	},
];
