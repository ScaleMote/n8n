import type { StellarNetwork } from './types';

export const stellar: { [key in StellarNetwork]: { url: string; passphrase: string } } = {
	public: {
		url: 'https://horizon.stellar.org/',
		passphrase: 'Public Global Stellar Network ; September 2015',
	},
	testnet: {
		url: 'https://horizon-testnet.stellar.org/',
		passphrase: 'Test SDF Network ; September 2015',
	},
};
