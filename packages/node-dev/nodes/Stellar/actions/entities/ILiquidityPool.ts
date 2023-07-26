import ILiquidityPoolReserve from './ILiquidityPoolReserve';

export default interface ILiquidityPool {
	id: string;
	feeBp: number;
	totalTrustlines: string;
	totalShares: string;
	reserves: ILiquidityPoolReserve[];
}
