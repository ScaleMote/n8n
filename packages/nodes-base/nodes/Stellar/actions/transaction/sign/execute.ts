import type { IExecuteFunctions } from 'n8n-workflow';
import { TransactionBuilder, Keypair, Server } from 'stellar-sdk';
import { setNetwork } from '../../../transport';

type SecretKeys = {
	keys: Array<{
		name: string;
		key: string;
	}>;
};

export async function sign(this: IExecuteFunctions) {
	const stellarNetwork = await setNetwork.call(this);
	const server = new Server(stellarNetwork.url);
	const xdr = this.getNodeParameter('xdr', 0) as string;
	const secretKeys = this.getNodeParameter('secretKeys', 1) as SecretKeys;
	const isSubmitToggleOn = this.getNodeParameter('submit', 1) as boolean;
	const transaction = TransactionBuilder.fromXDR(xdr, stellarNetwork.passphrase);
	let transactionResult: any;

	for (const account of secretKeys.keys) {
		const keypair = Keypair.fromSecret(account.key);
		transaction.sign(keypair);
	}

	if (isSubmitToggleOn) {
		try {
			transactionResult = await server.submitTransaction(transaction);
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			throw new Error(error.response.data.extras.result_codes.operations);
		}
	}

	return { result: transactionResult, transaction: transaction.toXDR() };
}
