import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class StellarApi implements ICredentialType {
	name = 'stellarNetworkApi';
	displayName = 'Stellar Network API';
	description = 'Youre operating in this network';
	properties: INodeProperties[] = [
		{
			displayName: 'Stellar Network',
			name: 'network',
			type: 'options',
			default: '',
			options: [
				{ name: 'Testnet', value: 'testnet' },
				{ name: 'Pubnet', value: 'pubnet' },
				{ name: 'Futurenet', value: 'futurenet' },
				{ name: 'Custom', value: 'custom' },
			],
		},
		{
			displayName: 'Horizon URL',
			name: 'networkUrl',
			type: 'string',
			required: true,
			displayOptions: {
				show: {
					network: ['custom'],
				},
			},
			default: '',
			placeholder: 'https://horizon-testnet.stellar.org',
		},
		{
			displayName: 'Network Passphrase',
			name: 'networkPassphrase',
			type: 'string',
			required: true,
			displayOptions: {
				show: {
					network: ['custom'],
				},
			},
			default: '',
			placeholder: 'Test SDF Network ; September 2015',
		},
	];
}
