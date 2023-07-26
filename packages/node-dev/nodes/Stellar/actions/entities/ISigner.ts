export default interface ISigner {
	values: {
		signerType: 'ed25519PublicKey' | 'sha256Hash' | 'preAuthTx';
		signerKey: string | Buffer;
		signerWeight: string;
	};
}
