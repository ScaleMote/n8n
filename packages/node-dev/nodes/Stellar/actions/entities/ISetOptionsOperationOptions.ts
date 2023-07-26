import { AuthFlag, Signer } from 'stellar-sdk';

export default interface ISetOptionsOperationOptions {
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
