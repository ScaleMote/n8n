import axios from 'axios';
import toml from 'toml';
import type { IAnclapTomlResponse } from './responses/IAnclapTomlResponse';
import { AxiosHttpRequestError } from './errors/AxiosHttpRequestError';
import type { StellarNetwork } from './types';

export class SEP1 {
	private anclapUrl: string;

	constructor(network: StellarNetwork) {
		const tomlUrls: { [key in StellarNetwork]: string } = {
			public: 'https://api.anclap.com/.well-known/stellar.toml',
			testnet: 'https://api-stage.anclap.ar/.well-known/stellar.toml',
		};

		this.anclapUrl = tomlUrls[network];
	}

	async getInfo(): Promise<IAnclapTomlResponse> {
		try {
			const result = await axios.get(this.anclapUrl);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			return toml.parse(result.data) as IAnclapTomlResponse;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
