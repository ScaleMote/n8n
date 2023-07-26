import { ClaimableBalanceProperties } from '../../entities/IStellarNode';

export const createClaimableBalanceDescription: ClaimableBalanceProperties = [
	{
		displayName: 'Asset',
		name: 'claimableAsset',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: false,
		},
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
				resource: ['claimableBalance'],
				operation: ['createClaimableBalance'],
			},
		},
	},
	{
		displayName: 'Amount',
		name: 'amount',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['claimableBalance'],
				operation: ['createClaimableBalance'],
			},
		},
		default: '',
		description: 'Amount to be transfer',
	},
	{
		displayName: 'Claimants',
		name: 'claimants',
		type: 'fixedCollection',
		placeholder: 'Add new claimant',
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add new claimant',
		},
		displayOptions: {
			show: {
				resource: ['claimableBalance'],
				operation: ['createClaimableBalance'],
			},
		},
		options: [
			{
				displayName: 'Claimant',
				name: 'values',
				values: [
					{
						displayName: 'Destination',
						name: 'destination',
						type: 'string',
						placeholder: 'GCEVJ...',
						default: '',
					},
					{
						displayName: 'Predicate',
						name: 'predicate',
						placeholder: 'Add Predicate',
						description: 'A claim predicate that must evaluate to true for the claim to succeed',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: false,
						},
						default: {},
						options: [
							{
								displayName: 'Predicate',
								name: 'values',
								values: [
									{
										displayName: 'Predicate',
										name: 'isPredicateConditional',
										type: 'options',
										required: true,
										options: [
											{
												name: 'Unconditional',
												value: false,
											},
											{
												name: 'Conditional',
												value: true,
											},
										],
										default: false,
										typeOptions: {
											multipleValues: false,
											multipleValueButtonText: 'Add predicate type',
										},
									},
									{
										displayName: 'Predicate Type',
										name: 'predicateType',
										type: 'options',
										required: true,
										default: 'time',
										options: [
											{
												name: 'Time',
												value: 'time',
											},
											{
												name: 'AND',
												value: 'and',
											},
											{
												name: 'OR',
												value: 'or',
											},
											{
												name: 'NOT',
												value: 'not',
											},
										],
										displayOptions: {
											show: {
												isPredicateConditional: [true],
											},
										},
									},
									{
										displayName: 'Time Type',
										name: 'isPredicateTimeRelative',
										type: 'options',
										required: true,
										options: [
											{
												name: 'Relative',
												value: true,
												description:
													'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
											},
											{
												name: 'Absolute',
												value: false,
												description:
													'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
											},
										],
										displayOptions: {
											show: {
												isPredicateConditional: [true],
												predicateType: ['time'],
											},
										},
										default: true,
									},
									{
										displayName: 'Time Value',
										name: 'predicateTimeValue',
										type: 'number',
										required: true,
										placeholder: 'Example: 1479151713',
										displayOptions: {
											show: {
												isPredicateConditional: [true],
												predicateType: ['time'],
											},
										},
										default: 0,
									},
									{
										displayName: 'Predicate 1',
										name: 'predicate1',
										placeholder: 'Add Predicate 1',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: false,
										},
										default: {},
										options: [
											{
												displayName: 'Predicate1',
												name: 'values',
												values: [
													{
														displayName: 'Predicate 1',
														name: 'isPredicateConditional',
														type: 'options',
														required: true,
														options: [
															{ name: 'Unconditional', value: false },
															{
																name: 'Conditional',
																value: true,
															},
														],
														default: false,
													},
													{
														displayName: 'Predicate 1 Type',
														name: 'predicateType',
														type: 'options',
														required: true,
														default: 'time',
														options: [
															{
																name: 'Time',
																value: 'time',
															},
															{
																name: 'AND',
																value: 'and',
															},
															{
																name: 'OR',
																value: 'or',
															},
															{
																name: 'NOT',
																value: 'not',
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
															},
														},
													},
													{
														displayName: 'Time Type',
														name: 'isPredicateTimeRelative',
														type: 'options',
														required: true,
														options: [
															{
																name: 'Relative',
																value: true,
																description:
																	'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
															},
															{
																name: 'Absolute',
																value: false,
																description:
																	'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['time'],
															},
														},
														default: true,
													},
													{
														displayName: 'Time Value',
														name: 'predicateTimeValue',
														type: 'number',
														required: true,
														placeholder: 'Example: 1479151713',
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['time'],
															},
														},
														default: false,
													},
													{
														displayName: 'Predicate 1',
														name: 'predicate1',
														placeholder: 'Add Predicate 1',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: false,
														},
														default: {},
														options: [
															{
																displayName: 'Predicate 1',
																name: 'values',
																values: [
																	{
																		displayName: 'Predicate 1',
																		name: 'isPredicateConditional',
																		type: 'options',
																		required: true,
																		options: [
																			{ name: 'Unconditional', value: false },
																			{
																				name: 'Conditional',
																				value: true,
																			},
																		],
																		default: false,
																	},
																	{
																		displayName: 'Predicate 1 Time Type',
																		name: 'isPredicateTimeRelative',
																		type: 'options',
																		required: true,
																		options: [
																			{
																				name: 'Relative',
																				value: true,
																				description:
																					'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
																			},
																			{
																				name: 'Absolute',
																				value: false,
																				description:
																					'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
																			},
																		],
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: true,
																	},
																	{
																		displayName: 'Time Value',
																		name: 'predicateTimeValue',
																		type: 'number',
																		required: true,
																		placeholder: 'Example: 1479151713',
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: false,
																	},
																],
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['and', 'or', 'not'],
															},
														},
													},
													{
														displayName: 'Predicate 2',
														name: 'predicate2',
														placeholder: 'Add Predicate 2',
														type: 'fixedCollection',
														default: {},
														options: [
															{
																displayName: 'Predicate 2',
																name: 'values',
																values: [
																	{
																		displayName: 'Predicate 2',
																		name: 'isPredicateConditional',
																		type: 'options',
																		required: true,
																		options: [
																			{ name: 'Unconditional', value: false },
																			{
																				name: 'Conditional',
																				value: true,
																			},
																		],
																		default: false,
																	},
																	{
																		displayName: 'Time Type',
																		name: 'isPredicateTimeRelative',
																		type: 'options',
																		required: true,
																		options: [
																			{
																				name: 'Relative',
																				value: true,
																				description:
																					'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
																			},
																			{
																				name: 'Absolute',
																				value: false,
																				description:
																					'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
																			},
																		],
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: true,
																	},
																	{
																		displayName: 'Time Value',
																		name: 'predicateTimeValue',
																		type: 'number',
																		required: true,
																		placeholder: 'Example: 1479151713',
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: false,
																	},
																],
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['and', 'or'],
															},
														},
													},
												],
											},
										],
										displayOptions: {
											show: {
												isPredicateConditional: [true],
												predicateType: ['and', 'or', 'not'],
											},
										},
									},
									{
										displayName: 'Predicate 2',
										name: 'predicate2',
										placeholder: 'Add Predicate 2',
										type: 'fixedCollection',
										typeOptions: {
											multipleValues: false,
										},
										default: {},
										options: [
											{
												displayName: 'Predicate 2',
												name: 'values',
												values: [
													{
														displayName: 'Predicate 2',
														name: 'isPredicateConditional',
														type: 'options',
														required: true,
														options: [
															{ name: 'Unconditional', value: false },
															{
																name: 'Conditional',
																value: true,
															},
														],
														default: false,
													},
													{
														displayName: 'Predicate 2 Type',
														name: 'predicateType',
														type: 'options',
														required: true,
														default: 'time',
														options: [
															{
																name: 'Time',
																value: 'time',
															},
															{
																name: 'AND',
																value: 'and',
															},
															{
																name: 'OR',
																value: 'or',
															},
															{
																name: 'NOT',
																value: 'not',
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
															},
														},
													},
													{
														displayName: 'Time Type',
														name: 'isPredicateTimeRelative',
														type: 'options',
														required: true,
														options: [
															{
																name: 'Relative',
																value: true,
																description:
																	'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
															},
															{
																name: 'Absolute',
																value: false,
																description:
																	'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['time'],
															},
														},
														default: true,
													},
													{
														displayName: 'Time Value',
														name: 'predicateTimeValue',
														type: 'number',
														required: true,
														placeholder: 'Example: 1479151713',
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['time'],
															},
														},
														default: false,
													},
													{
														displayName: 'Predicate 1',
														name: 'predicate1',
														placeholder: 'Add Predicate 1',
														type: 'fixedCollection',
														typeOptions: {
															multipleValues: false,
														},
														default: {},
														options: [
															{
																displayName: 'Predicate 1',
																name: 'values',
																values: [
																	{
																		displayName: 'Predicate 1',
																		name: 'isPredicateConditional',
																		type: 'options',
																		required: true,
																		options: [
																			{ name: 'Unconditional', value: false },
																			{
																				name: 'Conditional',
																				value: true,
																			},
																		],
																		default: false,
																	},
																	{
																		displayName: 'Predicate 1 Time Type',
																		name: 'predicateTimeType',
																		type: 'options',
																		required: true,
																		options: [
																			{
																				name: 'Relative',
																				value: true,
																				description:
																					'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
																			},
																			{
																				name: 'Absolute',
																				value: false,
																				description:
																					'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
																			},
																		],
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: true,
																	},
																	{
																		displayName: 'Time Value',
																		name: 'predicateTimeValue',
																		type: 'number',
																		required: true,
																		placeholder: 'Example: 1479151713',
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: false,
																	},
																],
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['and', 'or', 'not'],
															},
														},
													},
													{
														displayName: 'Predicate 2',
														name: 'predicate2',
														placeholder: 'Add Predicate 2',
														type: 'fixedCollection',
														default: {},
														options: [
															{
																displayName: 'Predicate 2',
																name: 'values',
																values: [
																	{
																		displayName: 'Predicate 2',
																		name: 'isPredicateConditional',
																		type: 'options',
																		required: true,
																		options: [
																			{ name: 'Unconditional', value: false },
																			{
																				name: 'Conditional',
																				value: true,
																			},
																		],
																		default: false,
																	},
																	{
																		displayName: 'Time Type',
																		name: 'isPredicateTimeRelative',
																		type: 'options',
																		required: true,
																		options: [
																			{
																				name: 'Relative',
																				value: true,
																				description:
																					'A relative deadline for when the claimable balance can be claimed. The value represents the number of seconds since the close time of the ledger which created the claimable balance.',
																			},
																			{
																				name: 'Absolute',
																				value: false,
																				description:
																					'Unix epoch as a string representing a deadline for when the claimable balance can be claimed. If the balance is claimed before the date then this clause of the condition is satisfied.',
																			},
																		],
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: true,
																	},
																	{
																		displayName: 'Time Value',
																		name: 'predicateTimeValue',
																		type: 'number',
																		required: true,
																		placeholder: 'Example: 1479151713',
																		displayOptions: {
																			show: {
																				isPredicateConditional: [true],
																			},
																		},
																		default: false,
																	},
																],
															},
														],
														displayOptions: {
															show: {
																isPredicateConditional: [true],
																predicateType: ['and', 'or'],
															},
														},
													},
												],
											},
										],
										displayOptions: {
											show: {
												isPredicateConditional: [true],
												predicateType: ['and', 'or'],
											},
										},
									},
								],
							},
						],
					},
				],
			},
		],
		default: {},
	},
];
