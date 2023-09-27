export interface ILiquidityPoolPrice {
	values: {
		isPriceAFraction: boolean;
		priceNumber?: number;
		priceNumerator?: number;
		priceDenominator?: number;
	};
}
