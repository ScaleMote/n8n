import type { IExecuteFunctions } from 'n8n-workflow';
import { Server } from 'stellar-sdk';
import { buildAsset, setNetwork } from '../../../transport';
import type { IAsset } from '../../entities/IAsset';
import type { ISlippageParameter } from './entities/ISlippageParameter';
import { getSwapAssetsOperation } from './helpers';

export async function swapAssets(this: IExecuteFunctions) {
	try {
		const stellarNetwork = await setNetwork.call(this);
		const server = new Server(stellarNetwork.url);
		const amount = this.getNodeParameter('amount', 0) as string;
		const publicKeyParam = this.getNodeParameter('publicKey', 0) as string;
		const slippageAmount = this.getNodeParameter('slippage', 0) as ISlippageParameter;
		const { values: sourceAssetValues } = this.getNodeParameter('sourceAsset', 0) as IAsset;
		const { values: destinationAssetValues } = this.getNodeParameter(
			'destinationValues',
			0,
		) as IAsset;

		const sourceAsset = buildAsset(sourceAssetValues);
		const destinationAsset = buildAsset(destinationAssetValues);

		const swapAssetOperation = await getSwapAssetsOperation(
			server,
			sourceAsset,
			destinationAsset,
			amount,
			publicKeyParam,
			slippageAmount.amount,
		);

		return { operation: swapAssetOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
