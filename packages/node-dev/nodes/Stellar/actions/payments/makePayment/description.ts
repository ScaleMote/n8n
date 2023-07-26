import { PaymentsProperties } from '../../entities/IStellarNode';

export const makePaymentDescription: PaymentsProperties = [
	{
		displayName: 'Destination Account',
		name: 'destinationAccount',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['makePayment'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account public key',
	},
	{
		displayName: 'Asset',
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
				operation: ['makePayment'],
			},
		},
		description: 'Asset held by the destination account',
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['payments'],
				operation: ['makePayment'],
			},
		},
		default: '',
		description: 'Amount to be transfer',
	},
];
