import { ICredentialDataDecryptedObject } from 'n8n-workflow';
import { StellarNetwork } from './types';
import SEP1 from './SEP1';
import GetAnclapTomlError from './errors/GetAnclapTomlError';
import { IAnclapTomlResponse } from './responses/responses';

export default class AnclapCredentials {
	public stellarNetwork: StellarNetwork;
	public publicKey: string;
	public secretKey: string;

	constructor(credentials: ICredentialDataDecryptedObject) {
		this.stellarNetwork = credentials.stellarNetwork as StellarNetwork;
		this.publicKey = credentials.publicKey as string;
		this.secretKey = credentials.secretKey as string;
	}

	async getToml(): Promise<IAnclapTomlResponse> {
		const sep1 = new SEP1(this.stellarNetwork);
		const toml = await sep1.getInfo();

		if (toml) return toml;
		else {
			throw new GetAnclapTomlError('Anclap.toml not found');
		}
	}
}
