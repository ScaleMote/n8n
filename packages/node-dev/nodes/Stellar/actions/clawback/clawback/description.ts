import { ClawbackProperties } from '../../entities/IStellarNode';

export const clawbackDescription: ClawbackProperties = [
	{
		displayName: 'Asset',
		name: 'assetToBurn',
		type: 'fixedCollection',
		default: {},
		required: true,
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
				resource: ['clawback'],
				operation: ['clawback'],
			},
		},
		description: 'Asset held by the destination account',
	},
	{
		displayName: 'From',
		name: 'from',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['clawback'],
				operation: ['clawback'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account address that receives the clawback',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['clawback'],
				operation: ['clawback'],
			},
		},
		default: '',
		description: 'Amount of the aforementioned asset to burn',
	},
];
