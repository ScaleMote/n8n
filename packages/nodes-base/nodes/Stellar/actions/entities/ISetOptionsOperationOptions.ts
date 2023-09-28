import type { AuthFlag, Signer } from 'stellar-sdk';

export interface ISetOptionsOperationOptions {
	inflationDest?: string;
	clearFlags?: AuthFlag | undefined;
	setFlags?: AuthFlag | undefined;
	masterWeight?: number;
	lowThreshold?: number;
	medThreshold?: number;
	highThreshold?: number;
	homeDomain?: string;
	signer?: Signer;
}
