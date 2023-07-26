import StellarSdk from 'stellar-sdk';
import type { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
import InvalidPublicKeyError from './error/InvalidPublicKeyError';

const FRIENDBOT_URL = 'https://friendbot.stellar.org/?addr=';

export async function fundAccount(this: IExecuteFunctions) {
	try {
		const items = this.getInputData();
		const publicKey = items[0].json.publicKey as string;

		if (StellarSdk.StrKey.isValidEd25519PublicKey(publicKey)) {
			const fundAccountRequest: IHttpRequestOptions = {
				url: `${FRIENDBOT_URL}${publicKey}`,
				method: 'GET',
			};
			await this.helpers.httpRequest(fundAccountRequest);
		} else {
			throw new InvalidPublicKeyError('Invalid public key');
		}
		return { accountFunded: publicKey };
	} catch (error) {
		throw new Error(error);
	}
}
