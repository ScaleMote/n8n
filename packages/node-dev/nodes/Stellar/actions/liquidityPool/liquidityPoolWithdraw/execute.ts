import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { convertAmountToBigNumber } from '../../../transport';

export async function liquidityPoolWithdraw(this: IExecuteFunctions) {
	try {
		const liquidityPoolId = this.getNodeParameter('liquidityPoolId', 0) as string;
		const amountToWithdraw = this.getNodeParameter('amount', 0) as number;
		const minAmountAToWithdraw = this.getNodeParameter('minAmountA', 0) as number;
		const minAmountBToWithdraw = this.getNodeParameter('minAmountA', 0) as number;

		const amount = convertAmountToBigNumber(amountToWithdraw);
		const minAmountA = convertAmountToBigNumber(minAmountAToWithdraw);
		const minAmountB = convertAmountToBigNumber(minAmountBToWithdraw);

		const liquidityPoolWithdrawOperation = Operation.liquidityPoolWithdraw({
			liquidityPoolId,
			amount,
			minAmountA,
			minAmountB,
		}).toXDR('base64');

		return { operation: liquidityPoolWithdrawOperation };
	} catch (error) {
		throw new Error(error);
	}
}
