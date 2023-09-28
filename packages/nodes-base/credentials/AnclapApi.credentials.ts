import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AnclapApi implements ICredentialType {
	name = 'anclapApi';
	displayName = 'Anclap API';
	description = 'Account credentials for Anclap API';
	properties: INodeProperties[] = [
		{
			displayName: 'Stellar Network',
			name: 'stellarNetwork',
			type: 'options',
			required: true,
			options: [
				{
					name: 'Testnet',
					value: 'testnet',
				},
				{
					name: 'Public',
					value: 'public',
				},
			],
			default: 'testnet',
		},
		{
			displayName: 'Public Key',
			required: true,
			name: 'publicKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Secret Key',
			required: true,
			name: 'secretKey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
	];
}
