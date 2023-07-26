import type { IExecuteFunctions, ITriggerFunctions } from 'n8n-workflow';
import BigNumber from 'bignumber.js';
import SetNetworkError from './errors/SetNetworkError';
import NoAssetSelectedError from './errors/NoAssetSelectedError';
import IAsset from '../actions/entities/IAsset';
import { Asset } from 'stellar-sdk';

const STELLAR_TESTNET_NETWORK = 'https://horizon-testnet.stellar.org/';
const STELLAR_TESTNET_PASSPHRASE = 'Test SDF Network ; September 2015';
const STELLAR_PUBNET_NETWORK = 'https://horizon.stellar.org/';
const STELLAR_PUBNET_PASSPHRASE = 'Public Global Stellar Network ; September 2015';
const STELLAR_FUTURENET_NETWORK = 'https://horizon-futurenet.stellar.org';
const STELLAR_FUTURENET_PASSPHRASE = 'Test SDF Future Network ; October 2022';

export async function setNetwork(
	this: IExecuteFunctions | ITriggerFunctions,
): Promise<StellarNetwork> {
	const credentials = await this.getCredentials('stellarNetworkApi');
	let stellarNetwork;

	switch (credentials.network) {
		case 'testnet':
			stellarNetwork = new StellarNetwork(STELLAR_TESTNET_NETWORK, STELLAR_TESTNET_PASSPHRASE);
			break;
		case 'pubnet':
			stellarNetwork = new StellarNetwork(STELLAR_PUBNET_NETWORK, STELLAR_PUBNET_PASSPHRASE);
			break;
		case 'futurenet':
			stellarNetwork = new StellarNetwork(STELLAR_FUTURENET_NETWORK, STELLAR_FUTURENET_PASSPHRASE);
			break;
		case 'custom':
			stellarNetwork = new StellarNetwork(
				credentials.networkUrl as string,
				credentials.networkPassphrase as string,
			);
	}

	if (stellarNetwork) {
		return stellarNetwork;
	} else {
		throw new SetNetworkError();
	}
}

class StellarNetwork {
	url: string;
	passphrase: string;

	constructor(networkUrl: string, networkPassphrase: string) {
		this.url = networkUrl;
		this.passphrase = networkPassphrase;
	}
}

export function convertAmountToBigNumber(amount: number): string {
	return new BigNumber(amount).toFixed(7).toString();
}

export function buildAsset(assetValues: IAsset['values']): Asset {
	let asset: Asset;
	if (!assetValues) throw new NoAssetSelectedError('An asset must be selected');
	if (assetValues.isNative) {
		asset = Asset.native();
	} else {
		asset = new Asset(assetValues.code, assetValues.issuer);
	}
	return asset;
}
