import type { ILiquidityPoolReserve } from './ILiquidityPoolReserve';

export interface ILiquidityPool {
	id: string;
	feeBp: number;
	totalTrustlines: string;
	totalShares: string;
	reserves: ILiquidityPoolReserve[];
}
