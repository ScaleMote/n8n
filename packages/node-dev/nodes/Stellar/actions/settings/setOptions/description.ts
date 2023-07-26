import { SettingsProperties } from '../../entities/IStellarNode';

export const setOptionsDescription: SettingsProperties = [
	{
		displayName: 'Inflation Destination',
		name: 'inflationDest',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
		default: '',
		placeholder: 'GCEVJ...',
		description: 'Account of the inflation destination',
	},
	{
		displayName: 'Set Flags',
		name: 'flagsToSet',
		type: 'fixedCollection',
		placeholder: 'Set flags',
		default: {},
		options: [
			{
				displayName: 'flagsToSet',
				name: 'values',
				values: [
					{
						displayName: 'Authorization Required',
						name: 'authorizationRequired',
						type: 'boolean',
						default: false,
						description:
							'Whether an issuer must approve an account before that account can hold its asset or not',
					},
					{
						displayName: 'Authorization Revocable',
						name: 'authorizationRevocable',
						type: 'boolean',
						default: false,
						description:
							'Whether an issuer can revoke an existing trustline’s authorization, thereby freezing the asset held by an account or not',
					},
					{
						displayName: 'Authorization Inmutable',
						name: 'authorizationInmutable',
						type: 'boolean',
						default: false,
						description: 'Whether if none of the other authorization flags can be set or not',
					},
					{
						displayName: 'Authorization Clawback Enabled',
						name: 'authorizationClawbackEnabled',
						type: 'boolean',
						default: false,
						description:
							'Whether if any subsequent trustlines established with this account will have clawbacks enabled',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'Clear Flags',
		name: 'flagsToClear',
		type: 'fixedCollection',
		placeholder: 'Remove existing flags',
		default: {},
		options: [
			{
				displayName: 'Clear Flags',
				name: 'values',
				values: [
					{
						displayName: 'Authorization Required',
						name: 'authorizationRequired',
						type: 'boolean',
						default: false,
						description:
							'Whether an issuer must approve an account before that account can hold its asset or not',
					},
					{
						displayName: 'Authorization Revocable',
						name: 'authorizationRevocable',
						type: 'boolean',
						default: false,
						description:
							'Whether an issuer can revoke an existing trustline’s authorization, thereby freezing the asset held by an account or not',
					},

					{
						displayName: 'Authorization Clawback Enabled',
						name: 'authorizationClawbackEnabled',
						type: 'boolean',
						default: false,
						description:
							'Whether if any subsequent trustlines established with this account will have clawbacks enabled',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'Master Weight',
		name: 'masterWeight',
		type: 'string',
		default: '',
		placeholder: '0 - 255',
		description:
			'A number from 0-255 (inclusive) representing the weight of the master key. If the weight of the master key is updated to 0, it is effectively disabled. This can result in a permanently locked account',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'Low Threshold',
		name: 'lowThreshold',
		type: 'string',
		default: '',
		placeholder: '0 - 255',
		description:
			'A number from 0-255 (inclusive) representing the threshold this account sets on all operations it performs that have a low threshold',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'Medium Threshold',
		name: 'medThreshold',
		type: 'string',
		default: '',
		placeholder: '0 - 255',
		description:
			'A number from 0-255 (inclusive) representing the threshold this account sets on all operations it performs that have a medium threshold',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'High Threshold',
		name: 'highThreshold',
		type: 'string',
		default: '',
		placeholder: '0 - 255',
		description:
			'A number from 0-255 (inclusive) representing the threshold this account sets on all operations it performs that have a high threshold',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'Signers',
		name: 'signer',
		type: 'fixedCollection',
		description:
			'Used to add/remove or adjust weight of an additional signer on the account. Signer will be removed from account if this weight is 0.',
		placeholder: 'Update signers',
		default: {},
		options: [
			{
				displayName: 'Signer',
				name: 'values',
				values: [
					{
						displayName: 'Signer Type',
						name: 'signerType',
						type: 'options',
						required: true,
						options: [
							{
								name: 'Ed25519 Public Key',
								value: 'ed25519PublicKey',
							},
							{
								name: 'Sha256 Hash',
								value: 'sha256Hash',
							},
							{
								name: 'Pre-Authorized Transaction Hash',
								value: 'preAuthTx',
							},
						],
						default: 'ed25519PublicKey',
					},
					{
						displayName: 'Signer',
						name: 'signerKey',
						type: 'string',
						required: true,
						default: '',
					},
					{
						displayName: 'Signer Weight',
						name: 'signerWeight',
						type: 'string',
						placeholder: '0-255',
						required: true,
						default: '',
						description: 'Signer will be removed from account if this weight is 0',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
	},
	{
		displayName: 'Home Domain',
		name: 'homeDomain',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['settings'],
				operation: ['setOptions'],
			},
		},
		default: '',
		placeholder: 'Example: example.com',
		description: 'Sets the home domain of an account',
	},
];
