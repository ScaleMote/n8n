import { convertAmountToBigNumber } from '../../../../transport';
import ILiquidityPoolPrice from '../../../entities/ILiquidityPoolPrice';
import IPriceFraction from '../../../entities/IPriceFraction';
import NoPriceSelectedError from '../errors/NoPriceSelectedError';

export default function getPrice(price: ILiquidityPoolPrice['values']): string | IPriceFraction {
	if (price.isPriceAFraction && price.priceNumerator && price.priceDenominator) {
		return {
			n: convertAmountToBigNumber(price.priceNumerator),
			d: convertAmountToBigNumber(price.priceDenominator),
		};
	}
	if (price.priceNumber) {
		return convertAmountToBigNumber(price.priceNumber);
	}
	throw new NoPriceSelectedError();
}
