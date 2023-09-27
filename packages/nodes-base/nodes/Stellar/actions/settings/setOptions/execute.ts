import type { IExecuteFunctions } from 'n8n-workflow';
import type { Signer, AuthFlag } from 'stellar-sdk';
import {
	Operation,
	AuthClawbackEnabledFlag,
	AuthRequiredFlag,
	AuthRevocableFlag,
	AuthImmutableFlag,
} from 'stellar-sdk';
import type { IFlags } from '../../entities/IFlags';
import type { ISigner } from '../../entities/ISigner';
import type { ISetOptionsOperationOptions } from '../../entities/ISetOptionsOperationOptions';

function buildFlags(flags: IFlags['values']): AuthFlag {
	let totalFlags = 0;
	if (flags.authorizationRequired) totalFlags += AuthRequiredFlag;
	if (flags.authorizationRevocable) totalFlags += AuthRevocableFlag;
	if (flags.authorizationInmutable) totalFlags += AuthImmutableFlag;
	if (flags.authorizationClawbackEnabled) totalFlags += AuthClawbackEnabledFlag;
	return totalFlags as AuthFlag;
}

function buildSigner(signerValues: ISigner['values']) {
	const signerType = signerValues.signerType;
	const signerKey = signerValues.signerKey;
	const weight = Number(signerValues.signerWeight);

	let signer: Signer;
	if (typeof signerKey != 'string' && signerType != 'ed25519PublicKey') {
		signerType === 'sha256Hash'
			? (signer = { sha256Hash: signerKey, weight })
			: (signer = { preAuthTx: signerKey, weight });
	} else {
		signer = { ed25519PublicKey: signerKey as string, weight };
	}
	return signer;
}

export async function setOptions(this: IExecuteFunctions) {
	try {
		const inflationDest = this.getNodeParameter('inflationDest', 0) as string;
		const { values: flagsToSet } = this.getNodeParameter('flagsToSet', 0) as IFlags;
		const { values: flagsToClear } = this.getNodeParameter('flagsToClear', 0) as IFlags;
		const masterWeight = this.getNodeParameter('masterWeight', 0) as string;
		const lowThreshold = this.getNodeParameter('lowThreshold', 0) as string;
		const medThreshold = this.getNodeParameter('medThreshold', 0) as string;
		const highThreshold = this.getNodeParameter('highThreshold', 0) as string;
		const homeDomain = this.getNodeParameter('homeDomain', 0) as string;
		const { values: signerValues } = this.getNodeParameter('signer', 0) as ISigner;

		const operationOptions: ISetOptionsOperationOptions = {};

		if (inflationDest) operationOptions.inflationDest = inflationDest;
		if (flagsToSet) {
			operationOptions.setFlags = buildFlags(flagsToSet);
		}
		if (flagsToClear) {
			operationOptions.clearFlags = buildFlags(flagsToClear);
		}
		if (masterWeight) operationOptions.masterWeight = Number(masterWeight);
		if (lowThreshold) operationOptions.lowThreshold = Number(lowThreshold);
		if (medThreshold) operationOptions.medThreshold = Number(medThreshold);
		if (highThreshold) operationOptions.highThreshold = Number(highThreshold);
		if (homeDomain) operationOptions.homeDomain = homeDomain;
		if (signerValues) {
			operationOptions.signer = buildSigner(signerValues);
		}

		const setOptionsOperation = Operation.setOptions(operationOptions).toXDR('base64');

		return { operation: setOptionsOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
