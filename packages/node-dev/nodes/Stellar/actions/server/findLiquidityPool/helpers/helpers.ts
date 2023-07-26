import { ServerApi } from 'stellar-sdk';
import LiquidityPool from '../../../entities/LiquidityPool';

export default function liquidityPoolMapper(liquidityPoolRecord: ServerApi.LiquidityPoolRecord) {
	const { id, fee_bp, total_trustlines, total_shares, reserves, _links } = liquidityPoolRecord;
	return new LiquidityPool(id, fee_bp, total_trustlines, total_shares, reserves, _links.self);
}
