import { getPrice } from '../helpers';
import type { ILiquidityPoolPrice } from '../../../../entities/ILiquidityPoolPrice';
import { NoPriceSelectedError } from '../../errors/NoPriceSelectedError';

describe('Get liquidity pool price', () => {
	it('Should return a fraction', () => {
		const fractionPriceValues = {
			isPriceAFraction: true,
			priceNumerator: 5,
			priceDenominator: 2,
		};
		const price = getPrice(fractionPriceValues);
		expect(price).toEqual({ numerator: '5.0000000', denominator: '2.0000000' });
	});

	it('Should return a number', () => {
		const numberPriceValues = {
			isPriceAFraction: false,
			priceNumber: 5,
		};
		const price = getPrice(numberPriceValues);

		expect(price).toEqual('5.0000000');
	});

	it('Should throw an error', () => {
		const invalidPriceValues: ILiquidityPoolPrice['values'] = {
			isPriceAFraction: false,
			priceNumerator: 5,
		};
		expect(() => getPrice(invalidPriceValues)).toThrow(new NoPriceSelectedError());
	});
});
