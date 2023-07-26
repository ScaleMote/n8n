import { LiquidityPoolProperties } from '../../entities/IStellarNode';

export const liquidityPoolDepositDescription: LiquidityPoolProperties = [
	{
		displayName: 'Liquidity Pool ID',
		name: 'liquidityPoolId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['liquidityPool'],
				operation: ['liquidityPoolDeposit'],
			},
		},
		default: '',
		placeholder: 'Example: 67260c4c1807b262ff851b0a3fe141194936bb0215b2f77447f1df11998eabb9',
		description: 'The PoolID for the Liquidity Pool to deposit into',
	},
	{
		displayName: 'Max Amount A',
		name: 'maxAmountA',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['liquidityPool'],
				operation: ['liquidityPoolDeposit'],
			},
		},
		default: '',
		description: 'Maximum amount of the first asset to withdraw',
	},
	{
		displayName: 'Max Amount B',
		name: 'maxAmountB',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['liquidityPool'],
				operation: ['liquidityPoolDeposit'],
			},
		},
		default: '',
		description: 'Maximum amount of the second asset to withdraw',
	},
	{
		displayName: 'Min Price',
		name: 'minPrice',
		description: 'Minimum depositA/depositB price',
		type: 'fixedCollection',
		placeholder: 'Select a min price',
		default: {},
		options: [
			{
				name: 'values',
				displayName: 'minPrice',
				values: [
					{
						displayName: 'Type',
						name: 'isPriceAFraction',
						type: 'options',
						default: false,
						options: [
							{
								name: 'Number',
								value: false,
							},
							{
								name: 'Fraction',
								value: true,
							},
						],
					},
					{
						displayName: 'Number',
						name: 'priceNumber',
						type: 'number',
						default: 0,
						required: true,
						displayOptions: {
							show: {
								isPriceAFraction: [false],
							},
						},
					},

					{
						displayName: 'Numerator',
						name: 'priceNumerator',
						type: 'number',
						placeholder: 'Numerator',
						default: '',
						displayOptions: {
							show: {
								isPriceAFraction: [true],
							},
						},
					},
					{
						displayName: 'Denominator',
						name: 'priceDenominator',
						type: 'number',
						typeOptions: {
							minValue: 1,
						},
						placeholder: 'Denominator',
						default: 1,
						displayOptions: {
							show: {
								isPriceAFraction: [true],
							},
						},
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['liquidityPool'],
				operation: ['liquidityPoolDeposit'],
			},
		},
	},
	{
		displayName: 'Max Price',
		name: 'maxPrice',
		description: 'Minimum depositA/depositB price',
		type: 'fixedCollection',
		placeholder: 'Select a max price',
		default: {},
		options: [
			{
				name: 'values',
				displayName: 'Max Price',
				values: [
					{
						displayName: 'Type',
						name: 'isPriceAFraction',
						type: 'options',
						default: false,
						options: [
							{
								name: 'Number',
								value: false,
							},
							{
								name: 'Fraction',
								value: true,
							},
						],
					},
					{
						displayName: 'Number',
						name: 'priceNumber',
						type: 'number',
						default: 0,
						required: true,
						displayOptions: {
							show: {
								isPriceAFraction: [false],
							},
						},
					},

					{
						displayName: 'Numerator',
						name: 'priceNumerator',
						type: 'number',
						placeholder: 'Numerator',
						default: '',
						displayOptions: {
							show: {
								isPriceAFraction: [true],
							},
						},
					},
					{
						displayName: 'Denominator',
						name: 'priceDenominator',
						type: 'number',
						placeholder: 'Denominator',
						typeOptions: {
							minValue: 1,
						},
						default: '',
						displayOptions: {
							show: {
								isPriceAFraction: [true],
							},
						},
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['liquidityPool'],
				operation: ['liquidityPoolDeposit'],
			},
		},
	},
];
