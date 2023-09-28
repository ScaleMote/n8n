import { convertAmountToBigNumber } from '../../../../transport';
import type { ILiquidityPoolPrice } from '../../../entities/ILiquidityPoolPrice';
import type { IFraction } from '../../../entities/IPriceFraction';
import { NoPriceSelectedError } from '../errors/NoPriceSelectedError';

export function getPrice(price: ILiquidityPoolPrice['values']): string | IFraction {
	if (price.isPriceAFraction && price.priceNumerator && price.priceDenominator) {
		return {
			numerator: convertAmountToBigNumber(price.priceNumerator),
			denominator: convertAmountToBigNumber(price.priceDenominator),
		};
	}
	if (price.priceNumber) {
		return convertAmountToBigNumber(price.priceNumber);
	}
	throw new NoPriceSelectedError();
}
