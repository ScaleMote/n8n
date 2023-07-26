import { ServerProperties } from '../../entities/IStellarNode';

export const findLiquidityPoolDescription: ServerProperties = [
	{
		displayName: 'Liquidity Pool Options',
		name: 'liquiditPoolSearchType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['findLiquidityPool'],
			},
		},
		default: 'liquidityPoolForID',
		options: [
			{ name: 'Check Liquidity Pool for ID', value: 'liquidityPoolForID' },
			{ name: 'Check Liquidity Pools for Assets', value: 'liquidityPoolForAssets' },
		],
	},
	{
		displayName: 'Liquidity Pool ID',
		name: 'liquidityPoolId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['server'],
				operation: ['findLiquidityPool'],
				liquiditPoolSearchType: ['liquidityPoolForID'],
			},
		},
		default: '',
		placeholder: 'Example: 67260c4c1807b262ff851b0a3fe141194936bb0215b2f77447f1df11998eabb9',
		description: 'The PoolID for the Liquidity Pool to deposit into',
	},
	{
		displayName: 'Reserves',
		name: 'reserves',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add reserve',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add reserve',
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
				resource: ['server'],
				operation: ['findLiquidityPool'],
				liquiditPoolSearchType: ['liquidityPoolForAssets'],
			},
		},
	},
];
