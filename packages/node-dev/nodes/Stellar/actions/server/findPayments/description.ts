import { ServerProperties } from '../../entities/IStellarNode';

export const findPaymentsDescription: ServerProperties = [
	{
		displayName: 'Public Key',
		name: 'publicKey',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['findPayments'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account public key',
	},
	{
		displayName: 'Descending Order',
		name: 'isOrderDescending',
		type: 'boolean',
		default: true,
		description: 'Whether to check payments in descending order or ascending',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['findPayments'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'searchLimit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		description: 'Limit of payments to check',
		default: 5,
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['findPayments'],
			},
		},
	},
	{
		displayName: 'Additional Filters',
		name: 'additionalFilters',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add additional filter',
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['findPayments'],
			},
		},
		options: [
			{
				displayName: 'Additional Filters',
				name: 'values',
				values: [
					{
						displayName: 'Filter',
						name: 'filter',
						type: 'options',
						required: true,
						default: 'firstPaymentFromAccount',
						options: [
							{ name: 'First Payment From Account', value: 'firstPaymentFromAccount' },
							{ name: 'First Payment In Asset', value: 'firstPaymentInAsset' },
						],
					},

					{
						displayName: 'Account From',
						name: 'accountFrom',
						type: 'string',
						required: true,
						displayOptions: {
							show: {
								filter: ['firstPaymentFromAccount'],
							},
						},
						default: '',
						placeholder: 'GCEVJ...',
						description: 'Account from where the payment was received',
					},
					{
						displayName: 'Asset',
						name: 'assetInPayment',
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
								filter: ['firstPaymentInAsset'],
							},
						},
						description: 'Asset received',
					},
				],
			},
		],
	},
];
