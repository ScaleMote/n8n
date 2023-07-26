import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { convertAmountToBigNumber } from '../../../transport';
import ILiquidityPoolPrice from '../../entities/ILiquidityPoolPrice';
import getPrice from './helpers/helpers';

export async function liquidityPoolDeposit(this: IExecuteFunctions) {
	try {
		const liquidityPoolId = this.getNodeParameter('liquidityPoolId', 0) as string;

		const maxAmountAToDeposit = this.getNodeParameter('maxAmountA', 0) as number;
		const maxAmountBToDeposit = this.getNodeParameter('maxAmountA', 0) as number;
		const { values: minPriceValues } = this.getNodeParameter('minPrice', 0) as ILiquidityPoolPrice;
		const { values: maxPriceValues } = this.getNodeParameter('maxPrice', 0) as ILiquidityPoolPrice;

		const maxAmountA = convertAmountToBigNumber(maxAmountAToDeposit);
		const maxAmountB = convertAmountToBigNumber(maxAmountBToDeposit);
		const minPrice = getPrice(minPriceValues);
		const maxPrice = getPrice(maxPriceValues);

		const liquidityPoolDepositOperation = Operation.liquidityPoolDeposit({
			liquidityPoolId,
			maxAmountA,
			maxAmountB,
			minPrice,
			maxPrice,
		}).toXDR('base64');

		return { operation: liquidityPoolDepositOperation };
	} catch (error) {
		throw new Error(error);
	}
}
