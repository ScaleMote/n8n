import StellarSdk from 'stellar-sdk';
import type { IExecuteFunctions } from 'n8n-workflow';

export async function createAccount(this: IExecuteFunctions) {
	console.log(this);
	try {
		const pair = StellarSdk.Keypair.random();
		const newKeypair = {
			publicKey: pair.publicKey(),
			secretKey: pair.secret(),
		};

		return newKeypair;
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
