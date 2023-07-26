import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { signerType } from '../../../entities/signerType';

export async function revokeSignerSponsorship(this: IExecuteFunctions) {
	try {
		const account = this.getNodeParameter('account', 0) as string;
		const signerType = this.getNodeParameter('signerType', 0) as signerType;
		const signerKey = this.getNodeParameter('signerKey', 0) as string;
		let signer;
		switch (signerType) {
			case 'ed25519PublicKey':
				signer = { ed25519PublicKey: signerKey };
				break;
			case 'sha256Hash':
				signer = { sha256Hash: signerKey };
				break;
			case 'preAuthTx':
				signer = { preAuthTx: signerKey };
				break;
			default:
				signer = { ed25519PublicKey: signerKey };
		}
		const revokeSignerSponsorshipOperation = Operation.revokeSignerSponsorship({
			account,
			signer,
		}).toXDR('base64');
		return { operation: revokeSignerSponsorshipOperation };
	} catch (error) {
		throw new Error(error);
	}
}
