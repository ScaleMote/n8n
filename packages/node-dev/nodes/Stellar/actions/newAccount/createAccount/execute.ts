import StellarSdk from 'stellar-sdk';
import type { IExecuteFunctions } from 'n8n-workflow';

export async function createAccount(this: IExecuteFunctions) {
	try {
		const pair = StellarSdk.Keypair.random();
		const newKeypair = {
			publicKey: pair.publicKey(),
			secretKey: pair.secret(),
		};

		return newKeypair;
	} catch (error) {
		throw new Error(error);
	}
}
