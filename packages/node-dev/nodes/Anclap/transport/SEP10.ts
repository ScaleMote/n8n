import axios from 'axios';
import AxiosHttpRequestError from './errors/AxiosHttpRequestError';
import AnclapCredentials from './AnclapCredentials';
import { validateXdrProvenance, signXdr } from './helpers';

export default class SEP10 {
	private anclapCredentials: AnclapCredentials;

	constructor(anclapCredentials: AnclapCredentials) {
		this.anclapCredentials = anclapCredentials;
	}

	async getChallenge() {
		const toml = await this.anclapCredentials.getToml();

		try {
			const challenge = await axios.get(
				`${toml.WEB_AUTH_ENDPOINT}/?account=${this.anclapCredentials.publicKey}`,
			);

			return challenge.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}

	async validateChallenge(challengeXdr: string) {
		const toml = await this.anclapCredentials.getToml();
		return await validateXdrProvenance(toml, challengeXdr, this.anclapCredentials.publicKey);
	}

	async signChallenge(challengeXdr: string) {
		return signXdr(challengeXdr, this.anclapCredentials);
	}

	async sendChallenge(signedXdr: string) {
		const toml = await this.anclapCredentials.getToml();

		try {
			const token = await axios.post(`${toml.WEB_AUTH_ENDPOINT}/`, {
				transaction: signedXdr,
			});

			return token.data;
		} catch (e) {
			throw new AxiosHttpRequestError(e);
		}
	}
}
