import { describe, it, expect } from 'vitest';
import liquidityPoolMapper from '../helpers';
import LiquidityPool from '../../../../entities/LiquidityPool';
import { Horizon } from 'stellar-sdk';

describe('liquidityPoolMapper', () => {
	const liquidityPoolRecord = {
		_links: {
			self: {
				href: 'https://horizon.stellar.org/liquidity_pools/a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088',
			},
			transactions: {
				href: 'https://horizon.stellar.org/liquidity_pools/a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088/transactions{?cursor,limit,order}',
				templated: true,
			},
			operations: {
				href: 'https://horizon.stellar.org/liquidity_pools/a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088/operations{?cursor,limit,order}',
				templated: true,
			},
		},
		id: 'a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088',
		paging_token: 'a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088',
		fee_bp: 30,
		type: 'constant_product' as Horizon.LiquidityPoolType,
		total_trustlines: '5678',
		total_shares: '5518642.1221118',
		reserves: [
			{
				asset: 'native',
				amount: '20396465.9897572',
			},
			{
				asset: 'USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
				amount: '1750391.5419392',
			},
		],
		last_modified_ledger: 46734461,
		last_modified_time: '2023-06-13T12:38:35Z',
	};

	it('should return a LiquidityPool instance with the correct properties', () => {
		const result = liquidityPoolMapper(liquidityPoolRecord);

		expect(result).toBeInstanceOf(LiquidityPool);
		expect(result.id).toEqual('a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088');
		expect(result.feeBp).toEqual(30);
		expect(result.totalTrustlines).toEqual('5678');
		expect(result.totalShares).toEqual('5518642.1221118');
		expect(result.reserves).toEqual([
			{
				asset: 'native',
				amount: '20396465.9897572',
			},
			{
				asset: 'USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
				amount: '1750391.5419392',
			},
		]);
		expect(result.link).toEqual(
			'https://horizon.stellar.org/liquidity_pools/a468d41d8e9b8f3c7209651608b74b7db7ac9952dcae0cdf24871d1d9c7b0088',
		);
	});
});
