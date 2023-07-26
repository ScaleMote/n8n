import { IExecuteFunctions } from 'n8n-workflow';
import { Asset, Server } from 'stellar-sdk';
import { setNetwork } from '../../../transport';
import IAsset from '../../entities/IAsset';
import IAssetsPath from '../../entities/IAssetsPath';
import liquidityPoolMapper from './helpers/helpers';
import LiquidityPoolNotFoundError from './errors/LiquidityPoolNotFoundError';
import LiquidityPool from '../../entities/LiquidityPool';

export async function findLiquidityPool(this: IExecuteFunctions) {
	const stellarNetwork = await setNetwork.call(this);
	const server = new Server(stellarNetwork.url as string);
	const liquiditPoolSearchType = this.getNodeParameter('liquiditPoolSearchType', 0) as string;
	const liquidityPools: LiquidityPool[] = [];
	switch (liquiditPoolSearchType) {
		case 'liquidityPoolForID':
			const liquidityPoolId = this.getNodeParameter('liquidityPoolId', 0) as string;

			try {
				liquidityPools.push(
					liquidityPoolMapper(
						await server.liquidityPools().liquidityPoolId(liquidityPoolId).call(),
					),
				);
			} catch {
				throw new LiquidityPoolNotFoundError('Liquidity pool not found');
			}
			break;
		case 'liquidityPoolForAssets':
			const reserves = this.getNodeParameter('reserves', 0, []) as IAssetsPath;
			let assets: Asset[] = [];
			if (reserves.values)
				reserves.values.forEach((asset: IAsset['values']) => {
					let reserve: Asset;
					if (asset.isNative) {
						reserve = Asset.native();
					} else {
						reserve = new Asset(asset.code, asset.issuer);
					}
					assets.push(reserve);
				});
			try {
				const { records: liquidityPoolRecords } = await server
					.liquidityPools()
					.forAssets(...assets)
					.call();
				liquidityPoolRecords.forEach((liquidityPoolRecord) => {
					liquidityPools.push(liquidityPoolMapper(liquidityPoolRecord));
				});
			} catch {
				throw new LiquidityPoolNotFoundError('Liquidity pool not found');
			}
	}
	return { liquidityPool: liquidityPools };
}
